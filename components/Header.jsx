import React, { useEffect, useState } from "react";
import "./Header.css";

function Header({ data, setAllItems }) {
  const [resp, setResp] = useState(false);
  const [widthScreen, setWidthScreen] = React.useState(window.innerWidth);

  function menuFilter(e) {
    if (e.target.innerHTML === "All") {
      setAllItems(data);
    }

    if (e.target.innerHTML === "Vegatarisch") {
      const vegatarischFood = data.filter((element) =>
        element.menuname.includes("a")
      );
      setAllItems(vegatarischFood);
    }

    if (e.target.innerHTML === "Vegan") {
      const veganFood = data.filter((element) =>
        element.menuname.includes("e")
      );
      setAllItems(veganFood);
    }

    if (e.target.innerHTML === "Sale %50") {
      const saleFood = data.filter((element) => element.menuname.length <= 8);
      setAllItems(saleFood);
    }
  }

  const handleWindowResize = () => {
    setWidthScreen(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    if (widthScreen <= 718) {
      setResp(true);
    } else {
      setResp(false);
    }

    return () => window.removeEventListener("resize", handleWindowResize);
  }, [widthScreen]);

  return (
    <div className={resp ? "respHeader" : "header"}>
      <h1>Our Menu</h1>

      <ul onClick={menuFilter} className={resp ? "respUlStyle" : "ulStyle"}>
        <li>All</li>
        <li>Vegatarisch</li>
        <li>Vegan</li>
        <li>Sale %50</li>
      </ul>
    </div>
  );
}

export default Header;
