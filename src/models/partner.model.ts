export const PartnerModel = (mySequelize, Sequelize) => {
    const Partner = mySequelize.define(
        'Partner',
        {
            // Model attributes are defined here
            name: {
                allowNull: false,
                type: Sequelize.STRING(255)
            },
            createdBy: {
                allowNull: false,
                type: Sequelize.STRING(255)
            },
            createdAt: {
                allowNull: false,
                defaultValue: mySequelize.literal('NOW()'),
                type: Sequelize.DATE
            },
            imgUrl: {
                allowNull: true,
                type: Sequelize.STRING(255)
            },
            updatedBy: {
                allowNull: true,
                type: Sequelize.STRING(255)
            },
            updatedAt: {
                allowNull: true,
                defaultValue: mySequelize.literal('NOW()'),
                type: Sequelize.DATE
            }
        },
        { freezeTableName: true }
    );

    return Partner;
};
