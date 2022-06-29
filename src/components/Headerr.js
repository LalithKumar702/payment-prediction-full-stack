import "./headerr.css";
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import image from "./Group 20399.svg";
import logo from "./logo.svg";
import AddModal from "./AddModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import AdvanceSearch from "./AdvanceSearch";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
export default function Headerr({ selectedRow, setReload }) {
  return (
    <div className="App">
      <div className="logo-flex">
        <View style={styles.container_header}>
          <View style={styles.square_abc}>
            <img src={image} alt="abc-products" className="abc" />
          </View>
          <View style={styles.square}>
            <img src={logo} alt="hrc-logo" className="hrc" />
          </View>
          <View style={styles.square} />
        </View>
      </div>
      <div className="header-part-two">
        <View style={styles.container}>
          <View style={styles.square_one}>
            <div className="btn-grp">
              <button className="predict-button"> Predict </button>
              <button> Analytics View </button>
              {/* <button className="search-button"> Advance Search </button> */}
              <AdvanceSearch/>
            </div>
          </View>

          <RefreshIcon
            style={{ color: "#fff", marginLeft: "-2rem" }}
            onClick={() => setReload(true)}
          />

          <View style={styles.search_square}>
            <input
              className="search-bar"
              placeholder="&nbsp;&nbsp;Search Customer ID"
             
            />
          </View>
          <View style={styles.square_three}>
            <div className="btn-grp2">
              <AddModal />

              <EditModal selectedRow={selectedRow} />
              {/* <button className="delete-button"> Delete </button> */}
              <DeleteModal selectedRow={selectedRow} />
            </div>
          </View>
        </View>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container_header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  square: {
    backgroundColor: "#2d4250",
    width: 500,
    height: 100,
    margin: 4,
  },
  square_abc: {
    backgroundColor: "#2d4250",
    width: 500,
    height: 100,
    margin: 4,
    justifyContent: "left",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  square_one: {
    backgroundColor: "#283d4a",
    width: 610,
    height: 36.5,
    margin: 4,
    marginRight: 40,
  },
  search_square: {
    backgroundColor: "#283d4a",
    width: 180,
    height: 40,
    margin: 4,
    marginRight: 60,
  },
  square_three: {
    backgroundColor: "#283d4a",
    width: 600,
    height: 36.5,
    margin: 4,
  },
});
