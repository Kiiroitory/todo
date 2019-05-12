import { Main} from "../../pages/main/Main";
import { StoreState} from "../types";
import { connect} from "react-redux";

function mapStateToProps({ todos }: StoreState) {
  return { todos }
}

export default connect(mapStateToProps, null)(Main)