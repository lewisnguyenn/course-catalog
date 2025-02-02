export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_METADATA_URL: string;
      NEXT_PUBLIC_COIN_URL: string;
      NEXT_PUBLIC_EMAIL: string;
      NEXT_PUBLIC_COIN_ADDRESS: string;
      NEXT_PUBLIC_INSTA_UR: string;
      NEXT_PUBLIC_FACEBOOK_URL: string;
      NEXT_PUBLIC_TIKTOK_URL: string;
      NEXT_PUBLIC_X_URL: string;
      NEXT_PUBLIC_TELE_URL: string;
      NEXT_PUBLIC_CHART_URL: string;
      NEXT_PUBLIC_DEX_URL: string;
      NEXT_PUBLIC_DEXS_URL: string;
      NEXT_PUBLIC_GECKO_URL: string;
      NEXT_PUBLIC_MCAP_URL: string;
      NEXT_PUBLIC_AVE_URL: string;
      NEXT_PUBLIC_UNI_URL: string;
      NEXT_PUBLIC_OPENSEA_URL: string;
      NEXT_PUBLIC_ETHER_URL: string;
    }
  }
}
