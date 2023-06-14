import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { HiOutlineCurrencyRupee } from 'react-icons/hi'
import { apiConnector } from '../../../../Services/apiConnector';
import { categories } from '../../../../Services/apis';
import RequirementSection from './RequirementSection';
import IconButton from '../../Common/IconButton';
import { useSelector } from 'react-redux';
const RenderCourseForm = () => {

    const { register, getValue, setValue, handleSubmit, formState: { errors } } = useForm();
    const [courseCategory, setCourseCategory] = useState([]);
    const course = useSelector((state) => state.course);
    const edited = useSelector((state) => state.course);

    const getCoursesCategory = async () => {
        const courseCategory = await apiConnector("GET", categories.GET_CATEGORY_API);
        console.log(process.env.REACT_APP_BASE_URL);
        console.log("courseCategory", courseCategory.data.response);
        setCourseCategory(courseCategory.data.response);
    }


    useEffect(() => {
        getCoursesCategory();
    }, [])

    const isUpdated = () => {

        const currentValues = getValue();

        if (currentValues.courseTitle === course.courseTitle ||
            currentValues.courseDesc === course.shortDesc ||
            currentValues.price === course.price ||
            currentValues.category._id === course.category._id ||
            currentValues.courseBenifits === course.whatYouWillLearn ||
            // currentValues.courseCategory.id ===course.category.id||
            currentValues.requirement.toString() === course.instructions.toString()
        ) {
            return true
        }

        else {
            return false
        }

    }

    // Page is reloading again and again , we have to check the method of use formn or we have to use event.preventDefault()
    const submitHandler = async (data,event) => {
        if (edited) {
            if (isUpdated) {
                const currentValues = getValue();
                const formData = new FormData();

                formData.append("courseId", course._id)

                if (currentValues.courseTitle !== course.courseName) {
                    formData.append("courseId", data.courseTitle);
                }
                if (currentValues.courseDec !== course.courseDescription) {
                    formData.append("course", data.courseDec);
                }
                if (currentValues.price !== course.price) {
                    formData.append("price", data.price);
                }

                if (currentValues.courseBenifits !== course.whatYouWillLearn) {
                    formData.append("whatYouWillLearn", data.courseBenifits);
                }
                if (currentValues.category._id !== course.category._id) {
                    formData.append("category", data.category._id);
                }
                if (currentValues.requirement.toString() !== course.instructions.toString()) {
                    formData.append("instructions", JSON.stringify(data.requirement));
                }


            }
        }
    }

    return (
        <div>
            <form onSubmit={(event) => { handleSubmit(submitHandler(event)) }} className='bg-richblack-800 lg:w-[400px] text-richblack-5 p-4 rounded-md '>
                <div>
                    <label htmlFor='courseTitle'>
                        Course Title <sup>*</sup><br />
                        <input type='text' className='bg-richblack-700 p-2 rounded-md' placeholder='Enter Course title' id='courseTitle' {...register("courseTitle", { required: "true" })} />
                    </label>
                    {errors.courseTitle &&
                        <span>Invalid  Course Title</span>}
                </div>

                <div>
                    <label htmlFor='courseDesc'>
                        Short Description <sup>*</sup><br />
                        <textarea rows={4} id='courseDesc' className='bg-richblack-700 w-full p-2 rounded-md' placeholder='Enter Description'
                            {...register("courseDec", { required: "true" })}></textarea>
                    </label>
                    {errors.courseDesc && <span>Description is required</span>}
                </div>

                <div className='relative'>
                    <label htmlFor='price'>
                        Price <sup>*</sup> <br />
                        <div className='bg-richblack-700 p-2 rounded-md'>
                            <span className='absolute text-richblack-800'><HiOutlineCurrencyRupee /></span>
                            <input type='text' id="price" placeholder='Enter Price' {...register("price", { required: "true" })} />
                        </div>
                    </label>
                    {errors.price && <span>Price is required</span>}
                </div>

                <div>
                    <label htmlFor='category'>Category <sup>*</sup><br />
                        <select id="category" className='bg-richblack-700 p-2' {...register("category", { required: "true" })}>
                            <option >Select category</option>
                            {
                                courseCategory.map((category) => (
                                    <option>{category.name}</option>
                                ))
                            }
                        </select>
                    </label>
                    {errors.category && <span>Course categoy is required</span>}
                </div>

                <div>
                    <label htmlFor='courseBenifits'>
                        Benifits of the course <sup>*</sup><br />
                        <textarea rows={4} id='courseBenifits' className='bg-richblack-700 w-full p-2 rounded-md' placeholder='Enter Benifits of the course'
                            {...register("courseBenifits", { required: "true" })}></textarea>
                    </label>
                    {errors.courseBenifits && <span>Description is required</span>}
                </div>

                <div>
                    <RequirementSection
                        label={"requirement"}
                        name={"requirement"}
                        getValue={getValue}
                        setValue={setValue}
                        register={register}
                    />
                </div>
                <div>
                    <button type='submit'>Save</button>
                    <button type='reset'>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default RenderCourseForm