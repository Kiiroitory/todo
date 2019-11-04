import * as React from 'react'
import { StoreState } from "../../../../redux/types";
import { Dispatch } from "redux";
import * as actinos from "../../../../redux/actions";
import { connect } from "react-redux";
import { DisplayState } from "../../../../redux/reducers";


export enum DisplayType {
  ALL = 'ALL',
  TODO = 'TODO',
  COMPLETE = 'COMPLETE'
}

interface DisplaySelecterProps {
  displayType: DisplayType
  changeDisplay?: (displayType) => void
}

class DisplaySelecter extends React.Component<DisplaySelecterProps> {

  constructor(props) {
    super(props)

    this.changeDisplay = this.changeDisplay.bind(this)
  }

  private changeDisplay(e: React.ChangeEvent<HTMLSelectElement>) {
    console.log(`type: ${e.target.value}`)
    this.props.changeDisplay!(e.target.value)
  }

  render() {

    return (
      <div>
        表示:
        <select value={this.props.displayType} onChange={this.changeDisplay}>
          <option value={DisplayType.ALL}>全て</option>
          <option value={DisplayType.TODO}>TODO</option>
          <option value={DisplayType.COMPLETE}>完了</option>
        </select>
      </div>
    )
  }
}

function mapStateToProps({ displayType }: DisplayState): DisplaySelecterProps {
  return { displayType }
}

function mapDispatchToProps(dispatch: Dispatch<actinos.DisplayAction>) {
  return  {
    changeDisplay: (displayType) => dispatch(actinos.changeDisplay(displayType))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySelecter)