import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meme-editor',
  imports: [CommonModule, FormsModule],
  templateUrl: './meme-editor.component.html',
  styleUrl: './meme-editor.component.css'
})
export class MemeEditorComponent {
  imageSrc: string | null = null;
  texts: { content: string; color: string; size: number; x: number; y: number }[] = [];
  newText = { content: '', color: '#000000', size: 20, x: 50, y: 50 };

  onImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = e.target?.result as string);
      reader.readAsDataURL(input.files[0]);
    }
  }

  addText() {
    this.texts.push({ ...this.newText });
    this.newText.content = '';
  }

  onDragEnd(event: DragEvent, index: number) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.texts[index].x = rect.left;
    this.texts[index].y = rect.top;
  }

  downloadMeme() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx || !this.imageSrc) return;

    const image = new Image();
    image.src = this.imageSrc;
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);

      this.texts.forEach((text) => {
        ctx.font = `${text.size}px Arial`;
        ctx.fillStyle = text.color;
        ctx.fillText(text.content, text.x, text.y);
      });

      const link = document.createElement('a');
      link.download = 'meme.png';
      link.href = canvas.toDataURL();
      link.click();
    };
  }





}
