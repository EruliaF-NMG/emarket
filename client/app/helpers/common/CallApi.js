/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-28 20:44:00 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2018-12-29 09:12:12
 */

import axios from "axios";
import { checkUser,logout} from './ManageStorage';

export default class CallApi {


    static getHeader = async (setHeader) => {


        let headers = {
            'Content-Type': 'application/json',
        };

        if (setHeader === true) {
            let userData = await checkUser();
            headers["Authorization"] = "Bearer "+userData.result.accessToken;
        }

        return headers;

    }

    static generateApiRequestBody(headerRequest, methodType, requestBody) {

        let apiBody = {
            method: methodType,
            headers: headerRequest
        };

        if (methodType != 'GET' && requestBody != null) {
            apiBody['body'] = JSON.stringify(requestBody);
        }

        return apiBody;

    }


    static call = async (apiParth, methodType = "GET", setHeader = true, requestBody = {}) => {


        const headerRequest = await CallApi.getHeader(setHeader);
        let result = new Array();

        switch (methodType) {

            case "GET":

                await axios.get(apiParth, { headers: headerRequest,validateStatus:function(status) {
                        return true;
                    } })
                    .then(function (response) {
                        result = {
                            success:true,
                            data:response.data
                        };
                    })
                    .catch(function (error) {
                        result= {
                            success:false,
                            data:error
                        }
                    });
                break;

            case "POST":
                await axios.post(apiParth, requestBody, { headers: headerRequest,validateStatus:function(status) {
                        return true;
                    }
                }).then(function (response) {
                        result = {
                            success:true,
                            data:response.data
                        };
                    })
                    .catch(function (error) {
                        console.log("",error);
                        result= {
                            success:false,
                            data:error
                        }
                    });
                break;

            case "DELETE":

                await axios.delete(apiParth, { headers: headerRequest,validateStatus:function(status) {
                        return true;
                    } })
                    .then(function (response) {
                        result = {
                            success:true,
                            data:response.data
                        };
                    })
                    .catch(function (error) {
                        result= {
                            success:false,
                            data:error
                        }
                    });
                break;

            default:

                await axios.put(apiParth, requestBody, { headers: headerRequest,validateStatus:function(status) {
                        return true;
                    } })
                    .then(function (response) {
                        result = {
                            success:true,
                            data:response.data
                        };
                    })
                    .catch(function (error) {
                        result= {
                            success:false,
                            data:error
                        }
                    });
        }

        if(result.data.message=="Unauthenticated."){
            await logout();
        }


        return result;
    }


}