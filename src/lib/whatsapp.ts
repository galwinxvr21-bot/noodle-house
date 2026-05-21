import { SITE_NAME, WHATSAPP_NUMBER } from "@/lib/site";

export type ReservationDetails = {
  name: string;
  phone: string;
  date: string;
  guests: string;
  specialRequests?: string;
};

export function formatReservationDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function buildReservationMessage(details: ReservationDetails): string {
  const requests =
    details.specialRequests?.trim() || "None";

  return [
    `*Table Reservation — ${SITE_NAME}*`,
    "",
    `*Name:* ${details.name.trim()}`,
    `*Phone:* ${details.phone.trim()}`,
    `*Date:* ${formatReservationDate(details.date)}`,
    `*Guests:* ${details.guests}`,
    `*Special requests:* ${requests}`,
  ].join("\n");
}

export function getWhatsAppReservationUrl(details: ReservationDetails): string {
  const text = encodeURIComponent(buildReservationMessage(details));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
