"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/analytics/client";
import type { EventMap, EventName } from "@/lib/analytics/core";
type Props<N extends EventName> = ComponentProps<typeof Link> & {
  event: N;
  properties: EventMap[N];
};
export function TrackedLink<N extends EventName>({
  event,
  properties,
  onClick,
  ...props
}: Props<N>) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackEvent(event, properties);
        onClick?.(e);
      }}
    />
  );
}
