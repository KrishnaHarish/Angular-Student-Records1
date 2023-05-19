import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  students: any[];

  ngOnInit(): void {
    this.students = [
      {
        name: 'Alex',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'Ben',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'Charlie',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'David',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'Emily',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'Frank',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'Grace',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'Henry',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'Isabella',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
      {
        name: 'Jacob',
        mathScore: this.getRandomScore(),
        scienceScore: this.getRandomScore(),
        englishScore: this.getRandomScore(),
      },
    ];
  }

  getRandomScore(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  getTotalAverage(): string {
    let total = 0;
    for (let student of this.students) {
      total +=
        (student.mathScore + student.scienceScore + student.englishScore) / 3;
    }
    return (total / this.students.length).toFixed(2);
  }

  getStrongestSubject(student: any): string {
    let maxScore = Math.max(
      student.mathScore,
      student.scienceScore,
      student.englishScore
    );
    switch (maxScore) {
      case student.mathScore:
        return 'Math';
      case student.scienceScore:
        return 'Science';
      case student.englishScore:
        return 'English';
    }
    return '';
  }

  calculateAverage(student: any): number {
    return (
      (student.mathScore + student.scienceScore + student.englishScore) / 3
    );
  }
}
