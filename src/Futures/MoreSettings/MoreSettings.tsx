import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function MoreSettings() {
  let { t, i18n } = useTranslation();
  let navigate = useNavigate();
  return (
    <div className="d-flex flex-column gap-2">
      <div
        className="card p-2 px-4 gap-3 flex-row fs-2 fw-bold justify-content-between"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/");
        }}
      >
        <span>{t("signOut")}</span>
        <i className="bi bi-box-arrow-right text-info fs-1"></i>
      </div>
      <div
        className="card p-2 px-4 gap-3 flex-row fs-2 fw-bold justify-content-between"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span>{t("language")}</span>
        <i className="bi bi-globe2 text-info fs-1"></i>
      </div>
      <div className="dropdown">
        <ul className="dropdown-menu w-100">
          <li>
            <button
              className="dropdown-item"
              onClick={() => {
                i18n.changeLanguage("en");
                document
                  .getElementsByTagName("html")[0]
                  .setAttribute("dir", "ltr");
              }}
            >
              {t("english")}
            </button>
          </li>
          <li>
            <button
              className="dropdown-item"
              onClick={() => {
                i18n.changeLanguage("ar");
                document
                  .getElementsByTagName("html")[0]
                  .setAttribute("dir", "rtl");
              }}
            >
              {t("arabic")}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
