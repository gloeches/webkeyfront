import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-test-formgroup',
  templateUrl: './test-formgroup.component.html',
  styleUrls: ['./test-formgroup.component.css']
})
export class TestFormgroupComponent {
  name = "Angular " + VERSION.major;
  initialValue = {
    first: null,
    last: null
  };

  form = new FormGroup({
    first: new FormControl(this.initialValue.first),
    last: new FormControl(this.initialValue.last)
  });

  clean() {
    this.form.reset({
      first: this.initialValue.first,
      last: this.initialValue.last
    });
  }
  onSubmit(){
    if(this.form.valid)
    console.log('from testFormgroup: '+this.form.value.first);
    this.form.reset();
  }
}
