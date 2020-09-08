/* eslint-disable jsx-a11y/alt-text */
import React, { useState, Fragment } from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LocalPharmacyIcon from '@material-ui/icons/LocalPharmacy';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HealingIcon from '@material-ui/icons/Healing';
import DoctorsIcon from './undraw_doctors_hwty.svg'
import HealthIcon from './undraw_medicine_b1ol.svg'
import MedicineIcon from './undraw_medicine_b1ol.svg'
import WorkoutIcon from './undraw_workout_gcgu.svg'

export default function StatefulExpansionPanels() {

  const [expanded, setExpanded] = useState(0);
  const [panels] = useState([
    {
      title: 'Diabetes Overview',
      content: <p>Designed to educate diet.
      In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        Designed to educate diet.
        In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. 
        In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.<br/>
        <img src={HealthIcon} className='panel-image'/>
      </p>,
      icon: <FavoriteIcon fontSize="large"/>
    },
    {
      title: 'Diet & Fitness',
      content: <p>Designed to educate diet.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        Designed to educate diet.<br/>
        <img src={WorkoutIcon} className='panel-image'/>
      </p>,
      icon: <FitnessCenterIcon fontSize="large"/>
    },
    {
      title: 'Comprehensive Healthcare plan',
      content: <span>Designed to educate diet.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        Designed to educate diet.
        <br/>
        <img src={DoctorsIcon} className='panel-image'/> 
      </span>,
      icon: <HealingIcon fontSize="large"/>
    },
    {
      title: 'Advocacy & support',
      content: <span>Designed to educate diet.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        In ut velit laoreet, blandit nisi id, tempus mi. Mauris interdum
        in turpis vel tempor. Vivamus tincidunt turpis vitae porta
        dignissim. Quisque condimentum augue arcu, quis tincidunt erat
        luctus sit amet. Sed quis ligula malesuada, sollicitudin nisl
        nec, molestie tellus. Donec commodo consequat gravida. Mauris in
        rhoncus tellus, eget posuere risus. Pellentesque eget lectus
        lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer condimentum, sapien varius vulputate lobortis, urna elit
        vestibulum ligula, sit amet interdum lectus augue ac eros.
        Vestibulum lorem ante, tincidunt eget faucibus id, placerat non
        est. Vivamus pretium consectetur nunc at imperdiet. Nullam eu
        elit dui. In imperdiet magna ac dui aliquam gravida. Aenean
        ipsum ex, fermentum eu pretium quis, posuere et velit.
        <br/>
        <img src={MedicineIcon} className='panel-image'/>
      </span>,
      icon: <LocalPharmacyIcon fontSize="large"/>
    }
  ]);

  const onChange = expanded => () => {
    setExpanded(expanded);
  };

  return (
    <Fragment>
      {panels
        .filter(panel => !panel.hidden)
        .map((panel, index) => (
          <ExpansionPanel
            key={index}
            expanded={index === expanded}
            disabled={panel.disabled}
            onChange={onChange(index)}
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            {panel.icon}
              <Typography style={{justifySelf:'center'}}>{panel.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={panel}>
              <Typography>{panel.content}</Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
    </Fragment>
  );
}
