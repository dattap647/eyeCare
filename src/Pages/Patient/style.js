const usestyle = () => ({
  container: {
    display: "flex",

    flexDirection: "row",
  },

  card: {
    minWidth: "180px",
  },
  cardTitle: {
    textAlign: "center",
    padding: "2px 0",
  },

  cardContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  paperContent: {
    margin: (5, 0),
    padding: 3,
  },
  cardActions: {
    flex: "center",
    alignContent: "center",
    justifyContent: "center",
    margin: "1rem 0",
  },
  table: {
    marginTop: 3,
    "& thead th": {
      fontWeight: "600",
      color: "#5ce",
      backgroundColor: "#fffbf2",
    },
    "& tbody td": {
      fontWeight: "300",
    },
    "& tbody tr:hover": {
      backgroundColor: "#fffbf2",
      // cursor: 'pointer'
    },
  },
  succes: {
    backgroundColor: "#4caf50",
  },
  btnstyle: { backgroundColor: "#56c596", margin: "8px 0", color: "white" },
});
export default usestyle;
