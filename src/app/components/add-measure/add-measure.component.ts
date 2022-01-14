import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBodyMetrics } from 'src/app/models/IBodyMetrics.model';
import { BodyMetricApiService } from 'src/app/services/body-metric-api.service';

@Component({
  selector: 'app-add-measure',
  templateUrl: './add-measure.component.html',
  styleUrls: ['./add-measure.component.css'],
})
export class AddMeasureComponent implements OnInit {
  constructor(private bodyMetricService: BodyMetricApiService) {}

  ngOnInit(): void {}

  onSubmit(addMetricsForm: NgForm) {
    console.log('Add Metrics form submitted');
    console.log(addMetricsForm.value);
    let bodyMetric: IBodyMetrics = {
      ...addMetricsForm.value,
      username: 'akazi',
    };
    console.log(`New Body Metric ${bodyMetric}`);
    this.bodyMetricService.addBodyMetric(bodyMetric).subscribe((res) => {
      console.log(res);
      addMetricsForm.form.reset();
    });
  }
}
