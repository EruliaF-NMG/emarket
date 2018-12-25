/*
 * @Author: Nisal Madusanka(EruliaF)
 * @Description:
 * @Date: 2018-05-10 09:25:52
 * @Last Modified by: Nisal Madusanka(EruliaF)
 * @Last Modified time: 2018-05-10 10:43:19
 */


export const errorMessage={
    required:"Please enter the :attribute",
    max:"The :attribute may not be greater than :max.",
    min:"The :attribute must be at least :min.",
    maxAmount:"The :attribute may not be greater than :max.",
    minAmount:"The :attribute must be at least :min.",
    digits:"The :attribute must have :min digits.",
    between:"The :attribute must be between :min and :max.",
    string:"The :attribute must be a string.",
    numeric:"The :attribute must be a number.",
    email:"The :attribute must be a valid email address.",
    requiredIf:"The :attribute field is required when :other is :value.",
    after_or_equal:'The :attribute must be a date after or equal to :startDate.'
};

export const errorTypes={
    formValidation:"1",
    apiErrors:"2",
};
