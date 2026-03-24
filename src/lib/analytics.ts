import { track } from "@vercel/analytics";

export type AnalyticsProperties = Record<
  string,
  string | number | boolean | null
>;

export function trackEvent(
  eventName: string,
  properties?: AnalyticsProperties,
) {
  try {
    track(eventName, properties);
  } catch {
    // Avoid breaking UX if analytics fails in the browser.
  }
}
