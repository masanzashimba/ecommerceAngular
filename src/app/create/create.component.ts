import { Component, inject } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { FormControl,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-create',
  imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
service:ArticleService=inject(ArticleService)

applyForm = new FormGroup({
  title:new FormControl(""),
  category:new FormControl(""),
  price:new FormControl(0),
  image:new FormControl(""),
  description:new FormControl(""),
  rate:new FormControl(0),
  count:new FormControl(0)
})
}
