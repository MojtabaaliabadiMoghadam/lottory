type Question = {
    question: string;
    answer: string | number;
};

export default class Captcha {
    private questions: Question[] = [
        { question: "پایتخت ایران کجاست؟", answer: "تهران" },
        { question: "جمع بیست و بیست و دو چند می‌شود؟", answer: 42 },
        { question: "جمع ده و پنج چند می‌شود؟", answer: 15 },
        { question: "پایتخت فرانسه کجاست؟", answer: "پاریس" },
        { question: "سه ضرب در هفت چند می‌شود؟", answer: 21 },
        { question: "چند روز در هفته وجود دارد؟", answer: 7 },
        { question: "چند ماه در سال وجود دارد؟", answer: 12 },
        { question: "جمع پنج و نه چند می‌شود؟", answer: 14 },
        { question: "حاصلضرب شش در هشت چند است؟", answer: 48 },
        { question: "سه بعلاوه چهار چند می‌شود؟", answer: 7 },
        { question: "جمع دو و سه چند می‌شود؟", answer: 5 },
        { question: "جمع بیست و پنج و پنج چند می‌شود؟", answer: 30 },
        { question: "حاصل دو به توان سه چند است؟", answer: 8 },
        { question: "حاصل جمع چهار و چهار چند می‌شود؟", answer: 8 },
        { question: "حاصل ۱۰ منهای ۳ چند است؟", answer: 7 },
        { question: "حاصل سه ضرب در پنج چند است؟", answer: 15 },
        { question: "جمع هفت و پنج چند می‌شود؟", answer: 12 },
        { question: "پایتخت ایران چیست؟", answer: "تهران" },
        { question: "چهار ضرب در چهار چند می‌شود؟", answer: 16 },
        { question: "جمع ده و ده چند می‌شود؟", answer: 20 },
        { question: "پایتخت خراسان رضوی کجاست؟", answer: "مشهد" },
        { question: "پایتخت آذربایجان شرقی کجاست؟", answer: "تبریز" },
        { question: "حاصل پنج ضرب در پنج چند است؟", answer: 25 },
        { question: "حاصل ۱۲ تقسیم بر ۴ چند است؟", answer: 3 },
        { question: "جمع چهار و سه چند می‌شود؟", answer: 7 }
    ];

    getRandomQuestion(): Question {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[randomIndex];
    }

    // دریافت پاسخ یک سوال خاص
    getAnswerForQuestion(question: string): string | number | null {
        const foundQuestion = this.questions.find(q => q.question === question);
        return foundQuestion ? foundQuestion.answer : null;
    }

    // بررسی صحیح بودن جواب
    checkAnswer(question: string, answer: string | number): boolean {
        const correctAnswer = this.getAnswerForQuestion(question);
        return correctAnswer !== null && correctAnswer === answer;
    }

    multiFunction(question?: string, answer?: string | number): Question | string | number | boolean | null {
        // اگر هیچ ورودی‌ای نداشت، یک سوال تصادفی برمی‌گرداند
        if (!question && !answer) {
            return this.getRandomQuestion();
        }

        // اگر فقط سوال داده شد، پاسخ آن سوال را برمی‌گرداند
        if (question && !answer) {
            return this.getAnswerForQuestion(question);
        }

        // اگر هم سوال و هم جواب داده شد، بررسی می‌کند که آیا پاسخ درست است یا نه
        if (question && answer !== undefined) {
            return this.checkAnswer(question, answer);
        }

        return null;  // در صورتی که هیچ‌کدام از شرایط بالا برقرار نباشد
    }

}
