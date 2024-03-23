import Classes from "../components/AR.module.css";

function AR() {
  return (
    <div className={Classes.pageBG}>
      <div className={Classes.pageContainer}>
        <iframe
          src="https://mywebar.com/p/Project_2_5r3lwrnbvd"
          className={Classes.ARframe}
        ></iframe>
      </div>
    </div>
  );
}

export default AR;
