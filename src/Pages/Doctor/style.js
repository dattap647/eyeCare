const usestyle = () => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: 1,
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  card: {
    minWidth: "275px",
  },
  cardIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    padding: 2,
    color: "#000",
    // color:'#3c44b1',
  },
  cardTitle: {
    textAlign: "center",
    padding: (2, 0),
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  cardActions: {
    flex: "center",
    alignContent: "center",
    justifyContent: "center",
    margin: "1rem 0",
  },
  paperContent: {
    margin: (5, 0),
    padding: 3,
  },
  table: {
    marginTop: 3,
    "& thead th": {
      fontWeight: "600",
      color: "green",
      backgroundColor: "red",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      // cursor: 'pointer'
    },
  },
  success: {
    backgroundColor: "#4caf50",
    color: "#fff",
    textTransform: "capitalize",
  },
  btnstyle: { backgroundColor: "#56c596", margin: "8px 0", color: "white" },
});
export default usestyle;
