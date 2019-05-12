import * as React from 'react'
import { RouteComponentProps} from "react-router";

export class Detail extends React.Component<RouteComponentProps<{id: string}>> {

  render() {
    const id = this.props.match.params.id
    return (
      <div>
        <h1>TodoID:{id}の詳細画面</h1>
      </div>
    )
  }
}