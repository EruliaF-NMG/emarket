import React, { Component } from "react";

const ProfileInfo = () => {
  return (
        <div className="col-md-6 col-sm-12 divLeft">
            <div className="card col-md-12 divLeft">
                <div className="card-body">
                    <div className="row">
                        <div className="media">
                            <img
                                src="https://www.gstatic.com/webp/gallery/1.jpg"
                                className="align-self-start mr-3 proImage"
                            />
                            <div className="media-body">
                                <h5 className="mt-0 proNameh5">Top-aligned media</h5>
                                <p>E-mail :- nn</p>
                                <p>Address :- nn</p>
                                <p>Contact :- nn</p>
                                <p>About :- nn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
};

const MyShops = () => {
  return (
        <div className="col-md-6 col-sm-12 divLeft">
            <div className="card div100 divLeft">
                <h5 class="card-header">My Shops</h5>
                <div className="card-body">
                <div className="row">
                    <div className="col-md-6 divLeft">
                    <div class="card div100">
                        <img
                        src="https://www.gstatic.com/webp/gallery/1.jpg"
                        class="card-img-top"
                        />
                        <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        </div>
                        <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
};


export {
    ProfileInfo,
    MyShops
}