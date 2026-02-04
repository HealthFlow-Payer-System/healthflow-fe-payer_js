import React from "react";
import clsx from "clsx";

import { styled } from "@mui/material/styles";
import ReplayIcon from "@mui/icons-material/Replay";

import { Form, ProgressOrError } from "@openimis/fe-core";
import FundingPanel from "./FundingPanel";
import MainPanelForm from "./MainPanelForm";

const StyledPayerForm = styled('div')(({ theme }) => ({
  ...theme.page ?? {},
  '&.locked': theme.page?.locked ?? {},
}));

const PayerForm = ({ readOnly, onBack, onSave, payer, canSave, onReset, onChange, error }) => {
  return (
    <StyledPayerForm className={clsx(readOnly && 'locked')}>
      <ProgressOrError error={error} />
      <Form
        module="payer"
        title={payer?.uuid ? "payer.PayerForm.title" : "payer.PayerForm.emptyTitle"}
        titleParams={{ label: payer.name ?? "" }}
        readOnly={readOnly}
        canSave={canSave}
        onEditedChanged={onChange}
        edited={payer}
        edited_id={payer.uuid}
        HeadPanel={MainPanelForm}
        Panels={[FundingPanel]}
        save={onSave}
        back={onBack}
        openDirty={onSave}
        actions={[
          {
            doIt: onReset,
            icon: <ReplayIcon />,
            onlyIfDirty: !readOnly,
          },
        ]}
      />
    </StyledPayerForm>
  );
};
export default PayerForm;
