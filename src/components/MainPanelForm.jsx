import React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { TextInput, PublishedComponent } from "@openimis/fe-core";

const StyledMainPanelForm = styled('div')(({ theme }) => ({
  '& .item': theme.paper?.item ?? {},
}));

const MainPanelForm = (props) => {
  const { edited, onEditedChanged, readOnly } = props;
  return (
    <StyledMainPanelForm>
      <Grid container direction="row">
        <Grid size={3} className="item">
          <TextInput
            module="payer"
            required
            label="name"
            readOnly={readOnly}
            value={edited?.name ?? ""}
            onChange={(name) => onEditedChanged({ ...edited, name })}
          />
        </Grid>
        <Grid size={3} className="item">
          <PublishedComponent
            pubRef="payer.PayerTypePicker"
            value={edited.type}
            required
            readOnly={readOnly}
            withNull={false}
            onChange={(type) => onEditedChanged({ ...edited, type })}
          />
        </Grid>
        <Grid size={3} className="item">
          <PublishedComponent
            pubRef="location.RegionPicker"
            value={edited.location?.parent ?? edited.location}
            readOnly={readOnly}
            withNull={false}
            required
            onChange={(location) => onEditedChanged({ ...edited, location })}
          />
        </Grid>
        <Grid size={3} className="item">
          <PublishedComponent
            region={edited.location?.parent || edited.location}
            value={edited.location?.parent ? edited.location : null}
            pubRef="location.DistrictPicker"
            withNull={false}
            readOnly={readOnly}
            onChange={(location) => onEditedChanged({ ...edited, location: location || edited.location?.parent })}
          />
        </Grid>
        <Grid size={3} className="item">
          <TextInput
            module="payer"
            label="email"
            readOnly={readOnly}
            value={edited?.email ?? ""}
            onChange={(email) => onEditedChanged({ ...edited, email })}
          />
        </Grid>
        <Grid size={3} className="item">
          <TextInput
            module="payer"
            label="phone"
            readOnly={readOnly}
            value={edited?.phone ?? ""}
            onChange={(phone) => onEditedChanged({ ...edited, phone })}
          />
        </Grid>
        <Grid size={3} className="item">
          <TextInput
            module="payer"
            label="fax"
            readOnly={readOnly}
            value={edited?.fax ?? ""}
            onChange={(fax) => onEditedChanged({ ...edited, fax })}
          />
        </Grid>
        <Grid size={3} className="item">
          <TextInput
            module="payer"
            required
            label="address"
            multiline
            readOnly={readOnly}
            value={edited?.address ?? ""}
            onChange={(address) => onEditedChanged({ ...edited, address })}
          />
        </Grid>
      </Grid>
    </StyledMainPanelForm>
  );
};

export default MainPanelForm;
