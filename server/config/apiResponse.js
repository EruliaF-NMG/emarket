/*
 * @Author: Nisal Madusanka(EruliaF) 
 * @Date: 2018-12-29 07:23:29 
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2018-12-29 07:44:05
 */

export const successResponse = {
    'code':'01', 
    'status':'success', 
    'description':'Action successfully completed',
    'httpStatus':'200'
}

export const formErrorResponse = {
    'code':'02', 
    'status':'validation-error', 
    'description':'Validation false',
    'httpStatus':'400'
}

export const badRequestResponse = {
    'code':'03', 
    'status':'error', 
    'description':'Bad Request',
    'httpStatus':'400'
}

export const exceptionResponse = {
    'code':'04', 
    'status':'error', 
    'description':'Exception occurred while processing the request',
    'httpStatus':'400'
}

export const customResponse = {
    'code':'05', 
    'status':'custom', 
    'description':'custom Response',
    'httpStatus':'200'
}