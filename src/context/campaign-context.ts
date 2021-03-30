import React from "react"

export interface CampaignData {
  donations: {
    target: number
    total: number
    currency: string
  }
}

export interface CampaignContextInterface {
  data: CampaignData
  reload: () => void
}

export const DEFAULT_CAMPAIGN_CONTEXT = {
  data: {
    donations: {
      target: 10000,
      total: 50,
      currency: "£",
    },
  },
  reload: () => null,
}

export const CampaignContext = React.createContext<CampaignContextInterface>(
  DEFAULT_CAMPAIGN_CONTEXT
)
