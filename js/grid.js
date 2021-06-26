module.exports = {
    outputStyle: 'scss',
    columns: 12,
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: true, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '30px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1100px', /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '1024px'
        },
        sm: {
            width: '768px',
            fields: '15px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '320px'
        }       
    }
}