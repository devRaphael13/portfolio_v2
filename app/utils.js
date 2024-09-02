export function formatDate(start, end) {
    start = new Date(start).toLocaleString("default", { month: "short", year: "numeric" });
    end = end ? new Date(end).toLocaleString("default", { month: "short", year: "numeric" }) : "PRESENT";
    return `${start} - ${end}`.toUpperCase();
}
