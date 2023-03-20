import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

export const appId = "04c2806e895647deb6253e341daddf8f"
export const token = "007eJxTYDi/9YBI/q0vE7rto9M9Qn7MnPjDqV2TY4pSzmSHJz36eukKDAYmyUYWBmapFpamZibmKalJZkamxqnGJoYpiSkpaRZpSsoSKQ2BjAyFPFnMjAwQCOKzMOQmZuYxMAAAJAIdkw=="

export const useClient = createClient(
    {codec: "vp8", mode: "rtc"}
);

export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";