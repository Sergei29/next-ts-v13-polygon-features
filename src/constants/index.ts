export const NEXT_PUBLIC_RICK_AND_MORTY_API =
  process.env.NEXT_PUBLIC_RICK_AND_MORTY_API || "";
export const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL || "";
export const NEXT_PUBLIC_RICK_AND_MORTY_REST_API =
  process.env.NEXT_PUBLIC_RICK_AND_MORTY_REST_API || "";

export const DELAY = {
  MINUTES_10: 600_000,
  MINUTES_15: 900_000,
  MINUTES_30: 1_800_000,
  HOUR_1: 3_600_000,
} as const;

export const queryKeys = {
  characters: "characters",
} as const;
