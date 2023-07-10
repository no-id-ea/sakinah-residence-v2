"use client";

import { useState } from "react";
import { YellowButton } from "@/components";

import { durations, credits, rate } from "@/constants";

const Calculator = () => {
  // Local states
  const [loanCredit, setLoanCredit] = useState<number>(0);
  const [loanDuration, setLoanDuration] = useState<number>(0);

  // Handle change
  const handleCreditChange = (e: any) => {
    setLoanCredit(e.target.value);
  };

  const handleDurationChange = (e: any) => {
    setLoanDuration(e.target.value);
  };

  // PMT
  const countPMT = (
    rate: number,
    nper: number,
    pv: number,
    fv: number,
    type: number
  ) => {
    let pmt = 0;

    fv || (fv = 0);
    type || (type = 0);

    if (rate === 0) {
      return -(pv + fv) / nper;
    }

    const pvif = Math.pow(1 + rate, nper);
    pmt = (-rate * (pv * pvif + fv)) / (pvif - 1);
    if (type === 1) {
      pmt /= 1 + rate;
    }
    return Math.ceil(pmt * -1);
  };

  const displayRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const countCredit = () => {
    console.log("credit", loanCredit);
    console.log("duration", loanDuration);
    console.log("result", countPMT(rate, loanDuration * 12, loanCredit, 0, 0))
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20 bg-snow">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-10 space-y-10">
        <h2 className="font-lato font-bold text-[48px] text-snow text-center">
          Kalkulator KPR
        </h2>

        <div className="flex flex-row items-center justify-center w-full h-full gap-20">
          <select
            className="w-full max-w-xs select select-bordered bg-snow"
            onChange={handleCreditChange}
          >
            <option disabled selected>
              Pilih kredit maksimum
            </option>
            {credits.map((item, idx) => (
              <option key={idx} value={item}>
                {displayRupiah(item)}
              </option>
            ))}
          </select>

          <select
            className="w-full max-w-xs select select-bordered bg-snow"
            onChange={handleDurationChange}
          >
            <option disabled selected>
              Pilih jangka waktu
            </option>
            {durations.map((item, idx) => (
              <option key={idx} value={item}>
                {item} Tahun
              </option>
            ))}
          </select>

          <YellowButton>
            <span className="font-montserrat font-semibold text-[18px] text-snow px-5 ">
              Hitung
            </span>
          </YellowButton>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
