"use client";

import { useState } from "react";
import { YellowButton } from "@/components";
import { toast } from "react-toastify";

import { durations, credits, rate } from "@/constants";

const Calculator = () => {
  // Local states
  const [loanCredit, setLoanCredit] = useState<number>(0);
  const [loanDuration, setLoanDuration] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

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

  const displayError = (msg: string) => {
    toast(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const countCredit = () => {
    if (loanCredit === 0) {
      displayError("Mohon pilih kredit maksimum");
      return;
    }

    if (loanDuration === 0) {
      displayError("Mohon pilih jangka waktu");
      return;
    }

    setResult(countPMT(rate, loanDuration * 12, loanCredit, 0, 0))
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-20 bg-snow">
      <div className="flex flex-col w-full h-full max-w-[1440px] px-10 space-y-10">
        <h2 className="font-lato font-bold text-[48px] text-shadow text-center">
          Kalkulator KPR
        </h2>

        <div className="flex flex-row items-center justify-center w-full h-full gap-20">
          <div className="flex flex-row items-start justify-start h-full gap-20">
            <div className="flex flex-col items-start justify-start w-full h-full space-y-3">
              <p className="font-lato font-semibold text-[24px] text-shadow">
                Kredit Maksimum
              </p>
              <select
                className="w-full max-w-xs select select-bordered bg-snow"
                defaultValue={"Pilih kredit maksimum"}
                onChange={handleCreditChange}
              >
                <option disabled>Pilih kredit maksimum</option>
                {credits.map((item, idx) => (
                  <option key={idx} value={item}>
                    {displayRupiah(item)}
                  </option>
                ))}
              </select>
              <p className="font-lato font-normal text-[16px] text-grey">
                *Bunga KPR 5% untuk rumah bersubsidi
              </p>
            </div>

            <div className="flex flex-col items-start justify-start w-full h-full space-y-3">
              <p className="font-lato font-semibold text-[24px] text-shadow">
                Jangka Waktu
              </p>
              <select
                className="w-full max-w-xs select select-bordered bg-snow"
                defaultValue={"Pilih jangka waktu"}
                onChange={handleDurationChange}
              >
                <option disabled>Pilih jangka waktu</option>
                {durations.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item} Tahun
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center justify-center h-full">
            <YellowButton onClick={countCredit}>
              <span className="font-montserrat font-semibold text-[18px] text-snow px-5 ">
                Hitung
              </span>
            </YellowButton>
          </div>
        </div>

        <div
          className={`${
            result === 0 ? "hidden" : "flex"
          } flex-row items-center justify-center h-full gap-20`}
        >
          <div className="flex flex-col items-center justify-center h-full px-20 py-5 space-y-3 bg-wood-2 rounded-xl drop-shadow-lg">
            <p className="font-lato font-normal text-[16px] text-shadow text-center">
              Angsuran per Bulan
            </p>
            <p className="font-lato font-semibold text-[24px] text-shadow text-center">
              {displayRupiah(result)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
