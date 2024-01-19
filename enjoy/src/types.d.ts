// This allows TypeScript to pick up the magic constants that's auto-generated by Forge's Vite
// plugin that tells the Electron app where to look for the Vite-bundled app code (depending on
// whether you're running in development or production).
declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string;
declare const MAIN_WINDOW_VITE_NAME: string;
declare module "compromise-paragraphs";

type SupportedLlmProviderType = "openai" | "googleGenerativeAi";

type LlmProviderType = {
  key?: string;
  model?: string;
  baseUrl?: string;
};

type DownloadStateType = {
  name: string;
  state: "progressing" | "interrupted" | "completed" | "cancelled";
  received: number;
  total: number;
};

type NotificationType = {
  type: "info" | "error" | "warning" | "success";
  message: string;
};

type WhisperOutputType = {
  model: {
    audio: {
      cts: number;
      head: number;
      layer: number;
      state: number;
    };
    ftype: number;
    mels: number;
    multilingual: number;
    text: {
      cts: number;
      head: number;
      layer: number;
      state: number;
    };
    type: string;
    vocab: number;
  };
  params: {
    language: string;
    model: string;
    translate: boolean;
  };
  result: {
    languate: string;
  };
  systeminfo: string;
  transcription: TranscriptionSegmentType[];
};

type TranscriptionSegmentType = {
  offsets: {
    from: number;
    to: number;
  };
  text: string;
  timestamps: {
    from: string;
    to: string;
  };
};

type TransactionStateType = {
  model: string;
  id: string;
  action: "create" | "update" | "destroy";
  record?: AudioType | UserType | RecordingType;
};

type FfmpegConfigType = {
  os: string;
  arch: string;
  commandExists: boolean;
  ffmpegPath?: string;
  ffprobePath?: string;
  scanDirs: string[];
  ready: boolean;
};

type LookupType = {
  id: string;
  word: string;
  context: string;
  contextTranslation: string;
  status?: "pending" | "completed" | "failed";
  meaning?: MeaningType;
  meaningOptions?: MeaningType[];
  createdAt: string;
  updatedAt: string;
};

type MeaningType = {
  id: string;
  word: string;
  lemma?: string;
  pronunciation?: string;
  pos?: string;
  definition: string;
  translation: string;
  lookups: LookupType[];
};

type PagyResponseType = {
  page: number;
  next: number | null;
};

type AudibleBookType = {
  title: string;
  subtitle: string;
  author: string;
  narrator: string;
  cover?: string;
  language?: string;
  sample?: string;
  url: string;
};

type TedTalkType = {
  title: string;
  presenterDisplayName: string;
  slug: string;
  canonicalUrl: string;
  duration: string;
  publishedAt: string;
  primaryImageSet: {
    url: string;
    aspectRatioName: string;
  }[];
};

type TedIdeaType = {
  url: string;
  cover?: string;
  title: string;
  description: string;
};
