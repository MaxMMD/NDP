import React, { useEffect, useReducer } from "react"
import { CampaignContext, CampaignData } from "../../context/campaign-context"

export interface Props {
  appId?: string
  apiPathName?: string
  responseType?: "campaign" | "fundraiser"
  children: JSX.Element | JSX.Element[]
}

function reducer(
  store: CampaignData,
  action: {
    type: string
    context?: any
  }
) {
  switch (action.type) {
    case "merge":
      return {
        ...store,
        ...action.context,
      }
    default:
      return store
  }
}

function CampaignWrapper(props: Props) {
  const [store, dispatch] = useReducer(reducer, {
    donations: {
      target: 10000,
      total: 50,
      currency: "£",
    },
  })

  async function loadData() {
    try {
      if (window === undefined || !props.appId || !props.apiPathName) {
        return
      }

      const res = await fetch(
        `https://api.justgiving.com/${props.appId}${props.apiPathName}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )

      const json = await res.json()

      dispatch({
        type: "merge",
        context: {
          donations: {
            target: json.fundraisingTarget,
            total: json.grandTotalRaisedExcludingGiftAid,
            currency: json.currencySymbol,
          },
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (props.appId && props.apiPathName) {
      loadData()
    }
  }, [props.appId, props.apiPathName])

  return (
    <CampaignContext.Provider
      value={{
        data: store,
        reload: () => loadData(),
      }}
    >
      {props.children}
    </CampaignContext.Provider>
  )
}

export default CampaignWrapper
