import React from 'react';
import { Segment,  Label} from 'semantic-ui-react';;

const basicStatus = [
    'Not yet review',
    'No answer 1',
    'No answer 2',
    'No answer 3',
    'Not Interested',
    'In Progress',
    'Approved',
    'Rejected',
  ]
  
  const Note = () => (
    <div>
        <Segment >
            Sales Status Filter:
        {basicStatus.map((sales_status) => (
            <Label  as='a' sales_status={sales_status} key={sales_status}>
            {sales_status}
            </Label>
        ))}
      </Segment>
    </div>
  )
  
export default Note
