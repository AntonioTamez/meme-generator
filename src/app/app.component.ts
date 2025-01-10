import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MemeEditorComponent } from "./meme-editor/meme-editor.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, MemeEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meme-generator';
}
