import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.css"]
})
export class CanvasComponent implements OnInit {
  @ViewChild("canvas", { static: true })
  canvas: ElementRef<SVGElement>;

  constructor() {}

  private ctx: CanvasRenderingContext2D;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.
  }

  animate(): void {}

  draw():void {
    this.ctx.fillRect(2,3,10,10);
  }
}
