declare const studentName = "Ada";
declare let labsCompleted: number;
declare let isEnrolled: boolean;
declare let likes: number;
declare const likeBtn: Element;
declare const likeCount: Element;
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
//# sourceMappingURL=script.d.ts.map