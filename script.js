document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        // Part 1: Multiple Choice Questions
        {
            type: "mcq",
            question: "ما هو نوع الفساد الذي يتضمن قبول أو تقديم رشاوى ؟ :",
            options: ["الفساد المالي", "الفساد السياسي", "الفساد الإداري", "كل ما سبق"],
            answer: "الفساد المالي"
        },
        {
            type: "mcq",
            question: "ماهي أهم التحديات التي تواجه مكافحة الفساد في الدول النامية ؟:",
            options: ["عدم تطبيق القانون", "جهل المواطنين بحقوقهم", "عرقلة لكثير من النقابات تختل فيها المعايير والقيم", "كل ما سبق"],
            answer: "كل ما سبق"
        },
        {
            type: "mcq",
            question: "كل هذا من السمات الخلقية التي يشترك فيها القائد الإداري مع غيره ماعدا واحدة :",
            options: ["احترام الوقت والنظام", "حسن التصرف", "القدرة على اتخاذ القرار", "الكفاءة العلمية والثقافية"],
            answer: "الكفاءة العلمية والثقافية"
        },
        {
            type: "mcq",
            question: "إذا كانت المؤسسة بأسلوب أخلاقي مع الموردين فها يترتب على ذلك :",
            options: ["تضييع العلاقة بينهم طويلة الأمل", "تستطيع المؤسسة أن تطلب أسعار وجودة أفضل", "تضمن الحصول على ما تريد من الموردين في الوقت المناسب", "كل ما سبق"],
            answer: "كل ما سبق"
        },
        {
            type: "mcq",
            question: "كل هذا الانحرافات الاجتماعية التي تقع من المخالف على المجتمع ، ما عدا واحدة :",
            options: ["تضر التعليم وفساد النفوس", "الاعتداء على المال العام", "الاعتداء على العرض والشرف", "الاعتداء على الملكية الخاصة"],
            answer: "الاعتداء على الملكية الخاصة"
        },
        {
            type: "mcq",
            question: "كل هذا من آثار الفساد الإداري ما عدا واحد :",
            options: ["زيادة معدل انتشار ارتكاب الجريمة المنظمة في المجتمع", "تدمير النسيج الاجتماعي والاقتصادي والسياسي في الدولة", "خلق حالة من التفاوت بين الطبقات", "التهرب من سداد الضرائب المباشرة"],
            answer: "التهرب من سداد الضرائب المباشرة"
        },
        {
            type: "mcq",
            question: "كل هذا من الأفعال التي تشكل جريمة غسيل الاموال ، ماعدا واحدة :",
            options: ["الإبلاغ عن أنشطة غسيل الاموال المشبوهة", "تعتبر جريمة غسيل الاموال والفساد الإداري من أخطر الجرائم في عصر الاقتصاد الرقمي", "كل من حاز أو احتفظ أو امتلك أموال غير مشروعة مع علمه بطبيعتها", "عملية إدخال المال في النظام المالي القانوني"],
            answer: "الإبلاغ عن أنشطة غسيل الاموال المشبوهة"
        },
        {
            type: "mcq",
            question: "كل هذا من مبررات انتشار الفساد الإداري في الدول النامية. ما عدا واحدة :",
            options: ["وجود فجوة بين القيم الحضارية وقواعد العمل الرسمي التي تحكم أجهزة الدولة", "محدودية التأثير الرسمي على قرارات الأجهزة الحكومية", "التوزيع الغير عادل للثروات بين الأفراد", "استخدام وسائل التكنولوجيا الحديثة في ارتكاب هذه الجريمة"],
            answer: "استخدام وسائل التكنولوجيا الحديثة في ارتكاب هذه الجريمة"
        },
        {
            type: "mcq",
            question: "أي من الجرائم التالية تعتبر مصدراً رئيسياً للأموال القذرة ؟:",
            options: ["الإتجار بالمخدرات", "الفساد", "تهريب الأسلحة", "كل ما سبق"],
            answer: "كل ما سبق"
        },
        {
            type: "mcq",
            question: "كل هذا من شروط جريمة غسيل الاموال ، ماعدا واحدة :",
            options: ["القيام بإجراء الفرض منه إخفاء هذه الاموال غير المشروعة", "أن يقوم بحيازة أو امتلاك أموال غير مشروعة", "ان تتوافر نية تحويل الاموال غير المشروعة الى أموال مشروعة", "أن توجد أموال غير مشروعة متحصلة من أنشطة غير مشروعة"],
            answer: "ان تتوافر نية تحويل الاموال غير المشروعة الى أموال مشروعة"
        },
        {
            type: "mcq",
            question: "كل هذا من نتائج عملية غسيل الأموال ، ماعدا واحدة :",
            options: ["انتشار البطالة بين فئات الشعب المختلفة", "شراء ذمم بعض رجال القضاء والشرطة والسياسيين", "الأضرار بصرف العملة", "ضعف الكفاءة الاقتصادية للمؤسسات العاملة في الدولة في استخدام مواردها"],
            answer: "ضعف الكفاءة الاقتصادية للمؤسسات العاملة في الدولة في استخدام مواردها"
        },
        {
            type: "mcq",
            question: "كل هذا من طرق علاج الفساد الإداري ما عدا واحدة :",
            options: ["نشر التعليم وتوعية المواطنين", "توحيد القيم والمبادئ في المجتمع", "الرقابة القانونية ومحاسبة الموظفين", "اللاخلاق والامتناع عن إبداء الرأي"],
            answer: "اللاخلاق والامتناع عن إبداء الرأي"
        },
        {
            type: "mcq",
            question: "كل هذا من الواجبات الأخلاقية التي تقع على عاتق العاملين بالوظيفة العامة ، ماعدا واحدة :",
            options: ["تأدية الواجب الوظيفي على أكمل وجه", "تطبيق القوانين واللوائح ، والانظمة للحفاظ على المال العام", "البعد عما يخل بشرف الوظيفة العامة", "تغليب المصلحة الشخصية على المصلحة العامة"],
            answer: "تغليب المصلحة الشخصية على المصلحة العامة"
        },
        {
            type: "mcq",
            question: "كل هذا من المراحل التي تمر بها عملية غسيل الاموال القذرة ، ماعدا واحدة :",
            options: ["إدخال المال ضمن النظام المالي القانوني", "نقل المال الغير مشروع من مكان وجوده إلى الديارين", "دمج المال غير المشروع مع الاموال المشروعة", "التحقق من شخصية العملاء الطبيعيين والاعتباري"],
            answer: "نقل المال الغير مشروع من مكان وجوده إلى الديارين"
        },
        {
            type: "mcq",
            question: "كل هذا من سمات الفساد الإداري :",
            options: ["يتخلل موروث القيم الإدارية", "وجود فساد في القيادة", "يؤثر على الاقتصاد", "تدمير المؤسسات"],
            answer: "يتخلل موروث القيم الإدارية"
        },
        {
            type: "mcq",
            question: "كل هذا من أسباب انتشار الفساد الإداري ما عدا واحدة :",
            options: ["ضعف الرقابة", "تدهور الأوضاع الاقتصادية", "نقص الوعي", "الاستقامة"],
            answer: "الاستقامة"
        },
        {
            type: "mcq",
            question: "كل هذا من سمات الرعاية الصحية :",
            options: ["توفير العلاج اللازم للمريض", "حماية صحة الأفراد", "تقليل انتشار الأمراض", "عدم الاهتمام بالمريض"],
            answer: "عدم الاهتمام بالمريض"
        },
        {
            type: "mcq",
            question: "كل هذا من فوائد أخلاقيات المهنة :",
            options: ["بناء الثقة", "تحسين الأداء", "تعزيز السمعة", "تقليل الرقابة"],
            answer: "تقليل الرقابة"
        },
        {
            type: "mcq",
            question: "كل هذا من نتائج الإخلال بأخلاقيات المهنة :",
            options: ["فقدان الثقة", "تدهور الأداء", "ضعف السمعة", "زيادة الرقابة"],
            answer: "زيادة الرقابة"
        },
        {
            type: "mcq",
            question: "كل هذا من أسباب تدهور أخلاقيات المهنة :",
            options: ["غياب القدوة", "عدم الاهتمام بالتدريب", "غياب الحوافز", "ضعف الإيمان"],
            answer: "ضعف الإيمان"
        },
        // Part 2: True/False Questions
        {
            type: "tf",
            question: "المسئولية الأخلاقية ليست بديلة عن المسئولية القانونية رغم وجود اختلاف بينهم.",
            answer: true
        },
        {
            type: "tf",
            question: "يجوز للطبيب الامتناع عن علاج المرضى اذا استعان بطبيب أخر دون موافقته.",
            answer: false
        },
        {
            type: "tf",
            question: "نقل الأعضاء هو استخدام عضو من أعضاء انسان حي من أجل إنقاذ حياة انسان حي.",
            answer: true
        },
        {
            type: "tf",
            question: "غسيل الأموال هي إظهار المال الناتج عن جرائم جنائية بصورة أموال لها مصدر قانوني مشروع.",
            answer: true
        },
        {
            type: "tf",
            question: "ينظر إلى الفساد الإداري على أنه حالة من الفوضى.",
            answer: true
        },
        {
            type: "tf",
            question: "يكفي أن يتسم الميثاق الأخلاقي بالاختصار والوضوح.",
            answer: false
        },
        {
            type: "tf",
            question: "يعتبر أخلاقيات علم من العلوم حيث يقوم بدراسة السلوك الإنساني وذلك في ضوء المعايير الأخلاقية.",
            answer: true
        },
        {
            type: "tf",
            question: "تعتبر جريمة غسيل الأموال والفساد الإداري من أخطر الجرائم في عصر الاقتصاد الرقمي.",
            answer: true
        },
        {
            type: "tf",
            question: "يعتبر التأكد من وجود شرح الأنظمة والتعليمات من الواجبات الأساسية التي يلتزم بها العامل.",
            answer: true
        },
        {
            type: "tf",
            question: "وجود علاقة مباشرة بين التمسك بأخلاقيات العمل وزيادة الإنتاج.",
            answer: true
        },
        {
            type: "tf",
            question: "من آثار جريمة غسيل الاموال دفع الضرائب للدولة التي يتم فيها غسيل الاموال.",
            answer: false
        },
        {
            type: "tf",
            question: "الدول التي يتم فيها غسيل الاموال يكون فيها جذب الاستثمارات الأجنبية من غيرها.",
            answer: false
        },
        {
            type: "tf",
            question: "نظمت المواثيق المهنية مبدأ أن لا يكون للآداب والأخلاق حدوداً.",
            answer: false
        },
        {
            type: "tf",
            question: "من السمات الانفعالية للقائد الإداري حسن التصرف.",
            answer: true
        },
        {
            type: "tf",
            question: "من الانجازات التي تفوز بها أخلاقيات المهنة السمعة الطيبة.",
            answer: true
        },
        {
            type: "tf",
            question: "لضمان عدم تعرض المؤسسة لأي نوع من أنواع المخالفات.",
            answer: true
        },
        {
            type: "tf",
            question: "يتمثل الدور الإيجابي للسلوك في عملية غسيل الاموال في تسهيل تحويل الأموال غير المشروعة.",
            answer: false
        },
        {
            type: "tf",
            question: "من الصفات الخلقية للقائد الإداري الثبات الانفعالي.",
            answer: true
        },
        {
            type: "tf",
            question: "يتصف الفساد الإداري بالثبات والاستمرار في جميع الدول.",
            answer: false
        },
        {
            type: "tf",
            question: "يهدف التزام المؤسسة بمجموعة من الواجبات الاخلاقية الى ترسيخ مفهوم أخلاقيات العمل.",
            answer: true
        },
        {
            type: "tf",
            question: "الأصل أنه \" يجوز للطبيب أن يشفي سراً \" - ويصل الى علمه بسبب مزاولته المهنة.",
            answer: true
        },
        {
            type: "tf",
            question: "من آثار الفساد الإداري نزيف الاقتصاد الوطني لصالح اقتصاديات الدول الأخرى.",
            answer: true
        },
        {
            type: "tf",
            question: "يعتبر تبسيط الإجراءات مبرراً لانتشار الفساد الإداري.",
            answer: false
        },
        {
            type: "tf",
            question: "تعد جريمة غسيل الاموال بلا شك جريمة.",
            answer: true
        },
        {
            type: "tf",
            question: "الحفاظ على أسرار المرضى لا يقتصر على الطبيب.",
            answer: false
        },
        {
            type: "tf",
            question: "يتعاظم دور الاخلاق في مكافحة الفساد الإداري في الدول النامية والمتقدمة معا.",
            answer: true
        },
        {
            type: "tf",
            question: "المخالفات السلوكية تصدر من جميع الموظفين.",
            answer: false
        },
        {
            type: "tf",
            question: "من المبادىء الاخلاقية للمهنة أن يحقق الربح للمؤسسة بكافة الطرق المشروعة وغير المشروعة.",
            answer: false
        },
        {
            type: "tf",
            question: "يجوز للطبيب ان يفوض أحد مساعديه في جوانب معينة من المهنة في غير وجوده.",
            answer: true
        },
        {
            type: "tf",
            question: "استكناه يجوز للطبيب ان يشفي سراً - اذا كان في شفاء السر مصلحة للمريض او مصلحة المجتمع.",
            answer: true
        }
    ];

    const questionArea = document.getElementById('question-area');
    const submitBtn = document.getElementById('submit-btn');
    const resultsArea = document.getElementById('results-area');
    let currentQuestionIndex = 0;
    let timer;
    const examDuration = 120 * 60; // 120 minutes (2 hours) in seconds

    function startTimer() {
        let timeLeft = examDuration;
        const timerElement = document.getElementById('timer').querySelector('span');

        timer = setInterval(() => {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                checkAnswers();
            }
        }, 1000);
    }

    function updateProgressBar() {
        const progress = (currentQuestionIndex / questions.length) * 100;
        document.querySelector('.progress').style.width = `${progress}%`;
    }

    function showQuestion(index) {
        const question = questions[index];
        let questionHtml = `
            <div class="question" id="q${index}">
                <p>${index + 1}- ${question.question}</p>
        `;

        if (question.type === 'mcq') {
            questionHtml += question.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${['أ', 'ب', 'ج', 'د'][i]}. ${option}
                </label>
            `).join('');
        } else {
            questionHtml += `
                <label>
                    <input type="radio" name="question${index}" value="true">
                    صحيحة (T)
                </label>
                <label>
                    <input type="radio" name="question${index}" value="false">
                    خاطئة (F)
                </label>
            `;
        }

        questionHtml += '</div>';
        questionArea.innerHTML = questionHtml;

        // Restore previous answer if exists
        const previousAnswer = localStorage.getItem(`question${index}`);
        if (previousAnswer) {
            const radio = questionArea.querySelector(`input[value="${previousAnswer}"]`);
            if (radio) radio.checked = true;
        }

        // Update navigation buttons
        document.getElementById('prev-btn').disabled = index === 0;
        document.getElementById('next-btn').textContent = index === questions.length - 1 ? 'إنهاء' : 'التالي';
        document.getElementById('submit-btn').style.display = index === questions.length - 1 ? 'block' : 'none';

        updateProgressBar();
    }

    function saveAnswer() {
        const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);
        if (selectedOption) {
            localStorage.setItem(`question${currentQuestionIndex}`, selectedOption.value);
        }
    }

    function checkAnswers() {
        clearInterval(timer);
        let score = 0;
        let totalQuestions = questions.length;
        let resultsHtml = '<div class="detailed-results">';

        questions.forEach((q, index) => {
            const savedAnswer = localStorage.getItem(`question${index}`);
            let isCorrect = false;

            if (savedAnswer) {
                if (q.type === "mcq") {
                    isCorrect = (savedAnswer === q.answer);
                } else {
                    isCorrect = (savedAnswer === String(q.answer));
                }
            }

            if (isCorrect) score++;

            resultsHtml += `
                <div class="question-result ${isCorrect ? 'correct-answer' : 'wrong-answer'}">
                    <p>السؤال ${index + 1}: ${isCorrect ? 'صحيح ✓' : 'خطأ ✗'}</p>
                    <p>إجابتك: ${savedAnswer || 'لم تتم الإجابة'}</p>
                    <p>الإجابة الصحيحة: ${q.type === "mcq" ? q.answer : (q.answer ? 'صحيحة (T)' : 'خاطئة (F)')}</p>
                </div>
            `;
        });

        resultsHtml += '</div>';
        const percentage = (score / totalQuestions) * 100;

        resultsArea.innerHTML = `
            <h3>نتيجة الاختبار</h3>
            <p class="score">الدرجة: ${score} من ${totalQuestions} (${percentage.toFixed(1)}%)</p>
            ${resultsHtml}
        `;
        resultsArea.style.display = 'block';
        document.getElementById('quiz-container').style.display = 'none';
        document.getElementById('timer').style.display = 'none';

        localStorage.clear();
    }

    // Event Listeners
    document.getElementById('prev-btn').addEventListener('click', () => {
        saveAnswer();
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        saveAnswer();
        if (currentQuestionIndex === questions.length - 1) {
            checkAnswers();
        } else {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });

    document.getElementById('submit-btn').addEventListener('click', checkAnswers);

    // Initialize quiz
    showQuestion(0);
    startTimer();
});
