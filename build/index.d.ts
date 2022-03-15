export default class CanvasRTC {
    fps: number;
    canvas: HTMLCanvasElement;
    mediaSource: MediaSource;
    mediaStream: MediaStream;
    constructor(canvas: HTMLCanvasElement);
    isSupportMediaSource(): boolean;
    initMediaSource(): this;
}
