import React, { useState } from "react";

import { InputNumber, message, Button } from "antd";
import "./App.css";

const App: React.FC = () => {
    // (useState)一个值和一个用于更新它的函数
    const [grade, setGrade] = useState<number>(0);
    const [gradenumber1, setGradeNumber1] = useState<number>(0);
    const [gradenumber2, setGradeNumber2] = useState<number>(0);
    const [gradenumber3, setGradeNumber3] = useState<number>(0);
    const [gradenumber4, setGradeNumber4] = useState<number>(0);
    const [gradenumber5, setGradeNumber5] = useState<number>(0);


    const onInputChange = (value: number | string | undefined) => {
        if (value) {
            setGrade(parseInt(value.toString()));
        }
    };

    const handleSubmit = () => {
        if (grade < 0) {
            message.info("invalid:Too small");
        }
        else if (grade > 100) {
            message.info("invalid:Too big");
        }
        else {
            message.success("input success");
            switch (Math.floor((grade-1) / 10)) {
                case 9:
                    setGradeNumber1(gradenumber1=>gradenumber1+1);
                    break;
                case 8:
                    setGradeNumber2(gradenumber2=>gradenumber2+1);
                    break;
                case 7:
                    setGradeNumber3(gradenumber3=>gradenumber3+1);
                    break;
                case 6:
                    setGradeNumber4(gradenumber4=>gradenumber4+1);
                    break;
                case 5:
                case 4:
                case 3:
                case 2:
                case 1:
                case 0:
                    setGradeNumber5(gradenumber5=>gradenumber5+1);
                    break;
            }
        };
    }

    const handleReset = () => {
        setGrade(0);
        InputNumber.displayName = ''
        setGradeNumber1(0);
        setGradeNumber2(0);
        setGradeNumber3(0);
        setGradeNumber4(0);
        setGradeNumber5(0);
    }


    return (
        <div>
            <h1>Student Grade Manage System</h1>
            <p>Please Input the Grade:</p>
            <InputNumber defaultValue={0} onChange={onInputChange} autoFocus={true} />

            <Button onClick={handleSubmit} type="primary">
                Submit
            </Button>

            <Button onClick={handleReset}>
                Reset
            </Button>

            <p>You now input: {grade}</p>
            <p>91-100:   {gradenumber1}</p>
            <p>81-90:    {gradenumber2}</p>
            <p>71-80:    {gradenumber3}</p>
            <p>61-70:    {gradenumber4}</p>
            <p>under 60: {gradenumber5}</p>

        </div>

    );
};

export default App;