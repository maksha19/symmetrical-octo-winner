import { format, utcToZonedTime } from "date-fns-tz";

export const formatTimestamp = (
  localDate: Date,
  dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"
): string => {
  const x = new Date(localDate.toUTCString());
  const s = utcToZonedTime(x, "Asia/Singapore");
  return format(s, dateFormat, { timeZone: "Asia/Singapore" });
};

const helloWorld = () => {
  const x = formatTimestamp(new Date());
  console.log(x);
  console.log("Hello world!");
};
export default helloWorld;

helloWorld();
