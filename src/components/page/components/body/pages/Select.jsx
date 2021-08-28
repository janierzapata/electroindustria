import React, { useState } from "react";
import PropTypes from "prop-types";

const Lineas = [
  {
    value: "00",
    label: "Linea 00",
    grupos: [
      {
        label: "grupo 0",
        value: "00",
        subgrupos: [
          {
            label: "subgrupo 0",
            value: "00",
          },
          {
            label: "subgrupo 1",
            value: "01",
          },
          {
            label: "subgrupo 2",
            value: "02",
          },
        ],
      },
      {
        label: "grupo 1",
      },
      {
        label: "grupo 2",
      },
    ],
  },
  {
    value: "01",
    label: "Linea 01",
    grupos: [
      {
        label: "grupo 0",
        value: "00",
        subgrupos: [
          {
            label: "subgrupo 0",
            value: "00",
          },
          {
            label: "subgrupo 1",
            value: "01",
          },
          
        ],
      },
      {
        label: "grupo 1",
        value: "01",
        subgrupos: [
          {
            label: "subgrupo 0",
            value: "00",
          },
          {
            label: "subgrupo 1",
            value: "01",
          },
          {
            label: "subgrupo 2",
            value: "02",
          },
          {
            label: "subgrupo 3",
            value: "03",
          },
          {
            label: "subgrupo 4",
            value: "04",
          },
        ],
      },
    ],
  },
  
];

const Select = ({ valueSelected, handleOnchange }) => {
  const [grupos, setGrupos] = useState(-1);
  const [subgrupo, setSubgrupo] = useState(-2);

  const handleGrupos = (e) => {
    const options = e.target.value;
    setGrupos(parseInt(options));
  };

  const handleSubgrupo = function (e) {
    const options = e.target.value;
    setSubgrupo(parseInt(options));
  };

  return (
    <div className="d-flex justify-content-between">
      <div className="mb-3 col-md-3">
        <label className="form-label">
          Linea
          <select
            className="form-select mt-3"
            name="linea"
            id="lineas"
            value={valueSelected}
            onChange={handleOnchange}
            onClick={handleGrupos}
          >
            <option value={-1} selected disabled>
              Selecciona una linea
            </option>
            {Array.isArray(Lineas) &&
              Lineas.map(({ value, label }, i) => (
                <option key={i} value={value}>
                  {label}
                </option>
              ))}
          </select>
        </label>
      </div>

      <div className="mb-3 col-md-3">
        <label className="form-label">
          Grupo
          <select
            className="form-select mt-3"
            name="grupos"
            id="grupos"
            value={valueSelected}
            onChange={handleOnchange}
            onClick={handleSubgrupo}
          >
            <option value={-1} selected disabled>
              Selecciona un grupo
            </option>
            {grupos > -1 &&
            
              Lineas[grupos].grupos.map(({value, label }, i) => (
                <option key={i} value={value}>
                  {label}
                </option>
              ))}
          </select>
        </label>
      </div>

      <div className="mb-3 col-md-3">
        <label className="form-label">
          Sub Grupo
          <select
            className="form-select mt-3"
            name="subGrupos"
            id="subGrupos"
            value={valueSelected}
          >
            <option value={-1} selected disabled>
              Selecciona un Sub Grupo
            </option>
            {subgrupo > -1 &&
              Lineas[grupos].grupos[subgrupo].subgrupos.map(({ value,label },i) => (
                <option key={i} value={value}>
                  {label}
                </option>
              )
              )}
          </select>
        </label>
      </div>
    </div>
  );
};
Select.propTypes = {
  handleOnchange: PropTypes.func.isRequired,
};

export default Select;
