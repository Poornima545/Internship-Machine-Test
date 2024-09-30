import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeForm = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate([])
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:5000/employees/${id}`)
                .then(response => {
                    reset(response.data);
                })
                .catch(error => {
                    console.error('Error fetching employee:', error);
                });
        }
    }, [id, reset]);

    const onSubmit = async (data) => {
        try {
            if (id) {
                await axios.put(`http://localhost:5000/employees/${id}`, data);
            } else {
                await axios.post('http://localhost:5000/employees', data);
            }
            reset();
            navigate('/employeeList');
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center">Employee Form</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto">
                <div className="form-group mb-2">
                    <label>Name</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('name')}
                        required
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        {...register('email')}
                        required
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Mobile No</label>
                    <input
                        type="tel"
                        className="form-control"
                        {...register('phone')}
                        required
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Designation</label>
                    <select className="form-control" {...register('designation')} required>
                        <option value="">Select Designation</option>
                        <option value="hr">HR</option>
                        <option value="manager">Manager</option>
                        <option value="sales">Sales</option>
                    </select>
                </div>

                <div className="form-group mb-2">
                    <label>Gender</label>
                    <div>
                        <label className="mr-3 me-4">
                            <input
                                type="radio"
                                value="male"
                                {...register('gender')}
                                required
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                {...register('gender')}
                                required
                            />
                            Female
                        </label>
                    </div>
                </div>

                <div className="form-group mb-2">
                    <label>Course</label>
                    <div>
                        <label className="mr-3 me-4">
                            <input
                                type="checkbox"
                                value='MCA'
                                {...register('course')}
                            />
                            MCA
                        </label>
                        <label className="mr-3 me-4">
                            <input
                                type="checkbox"
                                value='BSC'
                                {...register('course')}
                            />
                            BSC
                        </label>
                        <label className="mr-3">
                            <input
                                type="checkbox"
                                value='BCA'
                                {...register('course')}
                            />
                            BCA
                        </label>
                    </div>
                </div>

                <div className="form-group mb-2">
                    <label className="me-2">Image Upload</label>
                    <input
                        type="file"
                        className="form-control-file"
                        {...register('image')}
                        accept="image/*"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}

export default EmployeeForm;
