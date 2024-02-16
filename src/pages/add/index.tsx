import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import { ContainerForm, ErrorText, Input, InputContainer, NextButtonContainer, TextContainer, Title, TitleInput } from "../../Styles/Pages/Add";
import { useDispatch } from 'react-redux';
import { add } from '../../redux/reducers/products.reducer';

const Add = () => {
    const saveProduct = useDispatch();

    const submitAddProduct = async(formData:
        {sku:string, name:string, description:string, price: number, imgUrl: string}
        ) => {
        saveProduct(add(formData));
        reset();
    }

    const schemaAddProduct = yup.object().shape({
        sku: yup
            .string()
            .required('The SKU is required.'),
        name: yup
            .string()
            .required('The name is required.'),
        description: yup
            .string()
            .required('The description is required.')
            .min(10, 'The description have to be at least 10 characteres.'),
        price: yup
            .number()
            .required('The price is required.'),
        imgUrl: yup
            .string()
            .required('The link image is required.'),
    });
    
    
    const {
        control,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        resolver: yupResolver(schemaAddProduct),
            defaultValues: {
            sku: '',
            name: '',
            description: '',
            price: 0,
            imgUrl: ''
        },
    });

    
    return(
        <ContainerForm>
             <TextContainer>
                <Title align="center">Add your product.</Title>
            </TextContainer>
            <InputContainer>
                <div>
                    <TitleInput align="left">SKU</TitleInput>
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input value={value} onChange={onChange} error={errors.sku != undefined}/>
                        )}
                        name="sku"
                    />
                    {errors.sku && <ErrorText>{errors.sku.message}</ErrorText>}
                </div>
                <div>
                    <TitleInput align="left">Name</TitleInput>
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input value={value} onChange={onChange} error={errors.name != undefined}/>
                        )}
                        name="name"
                    />
                    {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
                </div>
                <div>
                    <TitleInput align="left">Description</TitleInput>
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input  value={value} onChange={onChange} error={errors.description != undefined}/>
                        )}
                        name="description"
                    />
                    {errors.description && <ErrorText>{errors.description.message}</ErrorText>}

                </div>
                <div>
                    <TitleInput align="left">Price</TitleInput>
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input value={value} onChange={onChange} error={errors.price != undefined}/>   
                        )}
                        name="price"
                    />
                    {errors.price && <ErrorText>{errors.price.message}</ErrorText>}
                </div>
                <div>
                    <TitleInput align="left">Image Url</TitleInput>
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        render={({ field: { onChange, value } }) => (
                            <Input value={value} onChange={onChange} error={errors.imgUrl != undefined}/>
                        )}
                        name="imgUrl"
                    />
                    {errors.imgUrl && <ErrorText>{errors.imgUrl.message}</ErrorText>}
                </div>
            </InputContainer>

            <NextButtonContainer>
                <button color={"black"} onClick={handleSubmit(submitAddProduct)} >Add Product</button>
            </NextButtonContainer>
        </ContainerForm>
    )
}

export default Add; 