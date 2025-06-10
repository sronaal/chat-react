import { z } from "zod";

export const schemaLoginForm = z.object({
    username: z.string()
        .min(2, 'El usuario debe ser tener al menos 2 caracteres')
        .nonempty('El usuario es requerido'),
    password: z.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .nonempty('La contraseña es requerida')
})

export const schemaRegisterForm = z.object({
    username: z.string()
        .min(2, 'El usuario debe ser tener al menos 2 caracteres')
        .nonempty('El usuario es requerido'),
    password: z.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .nonempty('La contraseña es requerida'),
    photo: z
    .any()
    .refine((files) => {
      return files instanceof FileList && files.length > 0
    }, {
      message: 'Seleccionar imagen'
    })
    .optional()
})