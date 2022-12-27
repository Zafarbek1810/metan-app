import React, { useEffect, useState } from "react";
import { GasColumnsWrapper } from "./GasColumns.style";
import EditSvg from "../../../../Common/Svgs/EditSvg";
import { Modal, Select } from "antd";
import { ModalContent } from "../../Xarajatlar/ExpensesTable/ExpensesTable.style";
import ButtonLoader from "../../../../Common/ButtonLoader";
import { useForm } from "react-hook-form";
import OutletProvider from "../../../../../Data/Providers/OutletProvider";
import Message from "../../../../../utils/Message";
import GasBallonsProvider from "../../../../../Data/Providers/GasBallonsProvider";
import MinLoader from "../../../../Common/MinLoader";
import { toast } from "react-toastify";
import Pagination from "rc-pagination";
import { FilterWrapper } from "../../KolonkalarReport/GasColumnReport/GasColumnReport.style";
import { Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const GasColumns = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    reset,
    control,
  } = useForm({
    defaultValues: {},
  });
  const [outletId, setoutletId] = useState(null);
  const [outlet, setOutlet] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [forRender, setForRender] = useState(null);
  const [ballons, setBallons] = useState([]);

  const [editingColumn, setEditingColumn] = useState(null);

  const [totalElements, setTotalElements] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const onChange = (page) => {
    setCurrentPage(page);
  };

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterState, setFilterState] = useState({});
  const [outlets, setOutlets] = useState([]);
  const [activeOutlet, setActiveOutlet] = useState(null);

  useEffect(() => {
    OutletProvider.getAllOutlets(0, 1000)
      .then((res) => {
        setOutlet(res.data);
        setoutletId(res?.data[0]?.id)
      })
      .catch((err) => {
        console.log(err);
        Message.serverError();
      });
  }, []);

  useEffect(() => {
    OutletProvider.getAllOutlets().then(
      ({ data }) => {
        setOutlets(data.map((i) => ({ label: i.title, value: i.id })));
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  useEffect(() => {
    setLoading2(true);
    GasBallonsProvider.getGasColums(currentPage - 1, 20, filterState)
      .then(({ data }) => {
        setBallons(data.data);
        console.log("data", data);
        setTotalElements(data.count);
      })
      .catch((err) => {
        console.log(err);
        Message.serverError();
      })
      .finally(() => {
        setLoading2(false);
      });
  }, [filterState, forRender, currentPage]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setValue("name", "");
  };
  const optionExpense = outlet.map((i) => ({
    label: i.title,
    value: i.id,
  }));
  const handleEdit = (obj) => {
    setEditingColumn(obj);
    setIsModalOpen(true);
  };

  const handleOutletId = (value) => {
    setoutletId(value);
    console.log("setoutletId", value);
  };

  const onSubmit = async (values) => {
    const body = {};
    body.outletId = +outletId;
    body.name = values.name;

    setLoading(true);
    if (editingColumn) {
      try {
        body.gasColumnId = editingColumn.id;
        body.newOutletId = +outletId;
        const { data } = await GasBallonsProvider.editGasColumn(body);
        console.log(data);
        setForRender(Math.random());
        toast.success("Muvaffaqiyatli o'zgartirildi!");
        handleCancel();
      } catch (err) {
        console.log(err);
        Message.serverError();
      }
    } else {
      try {
        const { data } = await GasBallonsProvider.addGasColumn(body);
        console.log(data);
        setForRender(Math.random());
        toast.success("Qo'shildi!");
        handleCancel();
      } catch (err) {
        console.log(err);
        toast.error(err?.response?.data?.message);
      }
    }

    setLoading(false);
  };

  useEffect(() => {
    if (editingColumn) {
      setValue("name", editingColumn.name);
      setValue("outlet", editingColumn.gasColumnId);
    }
  }, [isModalOpen]);

  const handleOutletFilter = (e) => {
    console.log(e.target.value);
    setActiveOutlet(e.target.value);
  };

  const onFilterSubmit = () => {
    const body = {
      outletId: activeOutlet,
    };

    setIsFilterOpen(false);
    setFilterState(body);
  };

  const onFilterClear = () => {
    setActiveOutlet(null);
    setFilterState({});
    setIsFilterOpen(false);
  };

  return (
    <GasColumnsWrapper>
      <div className="top">
        <h3 className="title">Kolonkalar</h3>
        <div className="modal-wrapper">
          {/*====MODAL====*/}
          <div className="modal-wrapper">
            <Button
              variant="contained"
              onClick={showModal}
              style={{
                fontFamily: "Inter",
                color: "#fff",
                background: "#787EFF",
              }}
            >
              + Qo'shish
            </Button>
            <Modal
              title="Qo'shish"
              open={isModalOpen}
              onCancel={handleCancel}
              width={700}
              footer={[null]}
            >
              <ModalContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <label className="label">
                    <span className="label-text">Savdo nuqtalari</span>
                    <Select
                      placeholder="Tanlang"
                      size="large"
                      allowClear
                      style={{
                        width: "100%",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                      onChange={handleOutletId}
                      options={optionExpense}
                      value={outletId}
                    />
                  </label>
                  <label className="label">
                    <span className="label-text">Nomi</span>
                    {errors.name && (
                      <span className="err-text">Majburiy maydon</span>
                    )}
                    <input
                        autoComplete="off"
                      type="text"
                      {...register("name", { required: true })}
                    />
                  </label>
                  <div className="btns">
                    <button
                      type="button"
                      className="btn btn-outline-warning"
                      onClick={handleCancel}
                    >
                      Bekor qilish
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      Saqlash {loading && <ButtonLoader />}
                    </button>
                  </div>
                </form>
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
      {/*filter*/}
      <div className="filter">
        <FilterWrapper>
          <Button
            variant="contained"
            onClick={() => setIsFilterOpen((p) => !p)}
            style={{
              fontFamily: "Inter",
              color: "#fff",
              background: "#787EFF",
            }}
          >
            Filter
          </Button>
          <div
            className="filter-content"
            style={{ visibility: isFilterOpen ? "visible" : "hidden" }}
          >
            <div className="row">
              <div className="select mb-3 col-6">
                <label className="form-label">Savdo nuqtasi</label>
                <select
                  className="form-select"
                  value={activeOutlet}
                  onChange={handleOutletFilter}
                >
                  <option value="null" disabled>
                    Tanlang
                  </option>
                  {outlets.map((out) => (
                    <option value={out.value} key={out.value}>
                      {out.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="d-flex gap-2">
              <div className="btn btn-secondary" onClick={onFilterClear}>
                Bekor qilish
              </div>
              <div className="btn btn-success" onClick={onFilterSubmit}>
                Qo'llash
              </div>
            </div>
          </div>
        </FilterWrapper>
      </div>
      <div className="filter-state col-12">
        {!!Object.keys(filterState).length && (
          <div className="filter-state__inner">
            <span>Filtrlangan</span>
            <button className="btn btn-secondary" onClick={onFilterClear}>
              O'chirish
            </button>
          </div>
        )}
      </div>
      <table className="table table-borderless table-hover">
        <thead>
          <tr>
            <th style={{ minWidth: "10%" }} className="col">
              Id
            </th>
            <th style={{ minWidth: "20%" }} className="col">
              Nomi
            </th>
            <th style={{ minWidth: "30%" }} className="col">
              Savdo nuqtasi
            </th>
            <th style={{ minWidth: "20%" }} className="col">
              Oxirki ko'rsatgich
            </th>
            <th style={{ minWidth: "20%" }} className="col">
              Amallar
            </th>
          </tr>
        </thead>
        <tbody>
          {!loading2 ? (
            ballons.length ? (
              ballons.map((obj, index) => (
                <tr key={obj.id}>
                  <td style={{ minWidth: "10%" }} className="col">
                    {(currentPage - 1) * 20 + index + 1}
                  </td>
                  <td style={{ minWidth: "20%" }} className="col">
                    {obj.name}
                  </td>
                  <td style={{ minWidth: "30%" }} className="col">
                    {obj?.outlet?.title}
                  </td>
                  <td style={{ minWidth: "20%" }} className="col">
                    {obj.lastValue}
                  </td>
                  <td style={{ minWidth: "30%" }} className="col">
                    <div className="btns">
                      <IconButton
                        style={{ background: "rgb(253, 181, 40, 0.12)" }}
                        onClick={() => handleEdit(obj)}
                      >
                        <EditIcon />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div
                style={{
                  textAlign: "center",
                  padding: 30,
                }}
              >
                <h3 style={{ color: "rgba(0, 0, 0, 0.7)" }}>
                  Kolonka mavjud emas!
                </h3>
              </div>
            )
          ) : (
            <MinLoader />
          )}
        </tbody>
      </table>
      <Pagination
        onChange={onChange}
        current={currentPage}
        total={totalElements}
        pageSize={20}
      />
    </GasColumnsWrapper>
  );
};

export default GasColumns;
