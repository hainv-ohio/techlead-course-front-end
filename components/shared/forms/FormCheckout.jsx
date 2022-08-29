import React, { useEffect } from "react";
import ModuleCheckoutSummary from "~/components/shared/forms/modules/ModuleCheckoutSummary";
import useStore from "~/hooks/store/useStore";




const FormCheckout = () => {
    const {getListStore, listStore, isLoading, getStore} = useStore();

    useEffect(() => {
        getListStore();
    }, [])
    
    return (
        <form className="ps-form--checkout" action="/" method="get">
            <div className="ps-form__billings">
                <h4 className="ps-form__heading">Billing Details</h4>
                <div className="row">
                <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                Email <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                Phone <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>
                                First Name <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <label>Last Name <sup>*</sup>
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                placeholder=""
                            />
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="form-group">
                            <label>Pick a store <sup>*</sup>
                            </label>
                            <select className="ps-select form-control">
                            {listStore.map(({ value, label }, index) => <option value={value} >{label}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default FormCheckout;
