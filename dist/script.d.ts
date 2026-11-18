declare const studentName = "Ada";
declare let labsCompleted: number;
declare let isEnrolled: boolean;
declare let likes: number;
declare const likeBtn: HTMLButtonElement;
declare const likeCount: HTMLParagraphElement;
declare const likeMessage: Element;
declare const locationBtn: Element;
declare const locationDisplay: Element;
declare const LikeCounter: {
    likes: number;
    increment(): void;
    render(): void;
};
declare const incrementLikes: () => void;
declare const updateLikeDisplay: () => void;
declare function formatLikes(value: number | string): string;
type Theme = "light" | "dark";
declare function getStoredTheme(): Theme;
declare function applyStoredTheme(): void;
declare const themeBtn: Element;
declare const goals: string[];
declare const goalsList: Element;
declare function getGreetingAfterDelay(): Promise<unknown>;
declare function showGreeting(): Promise<void>;
declare const factBtn: HTMLButtonElement;
declare const factDisplay: HTMLElement;
interface CatFact {
    fact: string;
    length: number;
}
declare function loadFact(): Promise<void>;
interface UserLocation {
    latitude: number;
    longitude: number;
    accuracy?: number;
}
//# sourceMappingURL=script.d.ts.map