/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount {
    onCreateAccount {
      activeAccount
      actualOrders
      configuration {
        key
      }
      createdAt
      id
      isVtexAccount
      maxiumMonthlyOrders
      name
      salesChannels {
        items {
          account {
            activeAccount
            actualOrders
            configuration {
              key
            }
            createdAt
            id
            isVtexAccount
            maxiumMonthlyOrders
            name
            salesChannels {
              items {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          accountSalesChannelsId
          createdAt
          id
          name
          salesSource {
            items {
              configuration {
                key
              }
              createdAt
              downloadOrders
              id
              salesChannel {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              salesChannelSalesSourceId
              salesSourceStoreConfigId
              storeConfig {
                batchInterval
                capacityManagement
                createdAt
                general {
                  address
                  addressComplement
                  changePricesReasons {
                    id
                    name
                  }
                  city
                  contactInformation {
                    email
                    name
                    phone
                  }
                  country
                  deliveryWindow {
                    finalHour
                    initialHour
                    name
                    weekDay
                  }
                  location {
                    latitude
                    longitude
                  }
                  measurementUnit
                  name
                  replacementReasons {
                    id
                    name
                  }
                  state
                }
                globalOrders
                id
                isActive
                localOrders
                packages {
                  description
                  id
                  name
                  price
                  quantity
                  type
                }
                packingPath
                preparationTime
                salesSources {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                timezone {
                  offset
                  value
                }
                updatedAt
              }
              storeConfigSalesSourcesId
              type
              updatedAt
              warehouseId
              warehouseName
            }
            nextToken
          }
          type
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateBatch = /* GraphQL */ `
  subscription OnCreateBatch {
    onCreateBatch {
      assignmentMethod
      assignmentTime {
        assignedAt
      }
      createdAt
      deliveryWindow {
        finalHour
        initialHour
      }
      id
      orders {
        items {
          batchOrdersId
          billing {
            address1
            address2
            billingName
            city
            country
            discount
            docType
            freighAmount
            id
            state
            tax
            total
          }
          createdAt
          createdDate
          customer {
            document
            documentType
            email
            firstName
            lastName
            level
            phone
            profileId
          }
          deliveryChannel
          deliveryDate
          finishedDate
          hostname
          invoices {
            invoiceCreationDate
            invoiceKey
            invoiceNumber
            invoiceReceiptDate
            invoiceSubtotal
            invoiceTaxes
            invoiceTotal
            invoiceUrl
            packages
          }
          items {
            EAN
            additionalEAN
            additionalReferenceCode
            additionalSku
            basePrice
            brand {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            categories {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            description
            dimensions {
              cubicWeight
              height
              lenght
              weight
              width
            }
            id
            images
            inventoryData {
              quantity
              warehouseId
              warehouseName
            }
            isCombo
            isTaxable
            itemName
            label
            metaData
            notes
            observations
            pickingOptions {
              alternateOptions
              onNotFound
            }
            price
            qrCodeContent
            quantity
            referenceCode
            sku
            storeConfig
            tax
            temperature
            unitMultiplier
            unitOfMeasure
            weightableProduct
          }
          marketingData {
            id
            marketingTags
            utmCampaign
            utmMedium
            utmPartner
            utmSource
            utmiPart
            utmipage
          }
          metaData
          notes
          observations
          orderAssignment {
            finishedDate
            initDate
            status
            worksheetId
          }
          orderId
          payment {
            authorization
            baseTotal
            cardNumber
            currency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            date
            discount
            firstDigits
            grandTotal
            installments
            lastDigits
            method
            paymentHolder
            paymentId
            paymentName
            plcConversionRate
            priceListCurrency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            tax
            transactionId
            transactionRef
          }
          prepareDate
          salesSourceId
          shipping {
            orderUniqueAddress
            shippingInfo {
              address1
              address2
              carrier {
                id
                name
                phone
                type
              }
              city
              contactName
              contactPhone
              country
              indications
              itemId
              location {
                alt
                lat
                lng
              }
              schedule {
                fromDate
                toDate
              }
              shippingMethod {
                id
                name
                saleChannelShippingInfo
                subTotal
                taxes
                total
              }
              shippingType
              state
            }
            tracking {
              carrier
              createDate
              delivered
              deliveredDate
              id
              packages
              trackingKey
              trackingUrl
            }
          }
          shippingEstimatedDateMin
          status
          storeConfigId
          transactionDate
          updatedAt
          vendor {
            name
            vendorId
          }
        }
        nextToken
      }
      seller
      status
      updatedAt
      worksheets {
        items {
          batchWorksheetsId
          categoriesIds
          createdAt
          finishedDate
          id
          items {
            ID
            categoriesId
            finalPrice
            itemAssignment {
              AssignedAt
              FinishedAt
              StartPickingAt
            }
            name
            orderSource {
              orderId
              quantity
            }
            originalPrice
            status
            temperature
            totalQuantity
          }
          ordersIds
          pickerAssignment {
            assignmentDate
            method
            pickerId
          }
          status
          totalItems
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateCarrier = /* GraphQL */ `
  subscription OnCreateCarrier {
    onCreateCarrier {
      active
      agencyId
      allocationTime
      authorized
      cancelable
      countries
      createdAt
      formConfiguration {
        description
        key
        label
        max
        min
        options {
          id
          label
          value
        }
        priority
        required
        type
        value
      }
      hasDevEnvironment
      id
      integration {
        dev {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
        prod {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
      }
      logo
      name
      onHoldServices
      pricing {
        type
        value
      }
      shippingPaymentMethods
      type
      updatedAt
      withQueues
    }
  }
`;
export const onCreateCarriersStoreConfig = /* GraphQL */ `
  subscription OnCreateCarriersStoreConfig {
    onCreateCarriersStoreConfig {
      account
      active
      carrierId
      config {
        key
        label
        value
      }
      createdAt
      deliveryMethod {
        id
        name
        serviceType
      }
      env
      id
      name
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      batchOrdersId
      billing {
        address1
        address2
        billingName
        city
        country
        discount
        docType
        freighAmount
        id
        state
        tax
        total
      }
      createdAt
      createdDate
      customer {
        document
        documentType
        email
        firstName
        lastName
        level
        phone
        profileId
      }
      deliveryChannel
      deliveryDate
      finishedDate
      hostname
      invoices {
        invoiceCreationDate
        invoiceKey
        invoiceNumber
        invoiceReceiptDate
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        packages
      }
      items {
        EAN
        additionalEAN
        additionalReferenceCode
        additionalSku
        basePrice
        brand {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        categories {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        description
        dimensions {
          cubicWeight
          height
          lenght
          weight
          width
        }
        id
        images
        inventoryData {
          quantity
          warehouseId
          warehouseName
        }
        isCombo
        isTaxable
        itemName
        label
        metaData
        notes
        observations
        pickingOptions {
          alternateOptions
          onNotFound
        }
        price
        qrCodeContent
        quantity
        referenceCode
        sku
        storeConfig
        tax
        temperature
        unitMultiplier
        unitOfMeasure
        weightableProduct
      }
      marketingData {
        id
        marketingTags
        utmCampaign
        utmMedium
        utmPartner
        utmSource
        utmiPart
        utmipage
      }
      metaData
      notes
      observations
      orderAssignment {
        finishedDate
        initDate
        status
        worksheetId
      }
      orderId
      payment {
        authorization
        baseTotal
        cardNumber
        currency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        date
        discount
        firstDigits
        grandTotal
        installments
        lastDigits
        method
        paymentHolder
        paymentId
        paymentName
        plcConversionRate
        priceListCurrency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        tax
        transactionId
        transactionRef
      }
      prepareDate
      salesSourceId
      shipping {
        orderUniqueAddress
        shippingInfo {
          address1
          address2
          carrier {
            id
            name
            phone
            type
          }
          city
          contactName
          contactPhone
          country
          indications
          itemId
          location {
            alt
            lat
            lng
          }
          schedule {
            fromDate
            toDate
          }
          shippingMethod {
            id
            name
            saleChannelShippingInfo
            subTotal
            taxes
            total
          }
          shippingType
          state
        }
        tracking {
          carrier
          createDate
          delivered
          deliveredDate
          id
          packages
          trackingKey
          trackingUrl
        }
      }
      shippingEstimatedDateMin
      status
      storeConfigId
      transactionDate
      updatedAt
      vendor {
        name
        vendorId
      }
    }
  }
`;
export const onCreateSalesChannel = /* GraphQL */ `
  subscription OnCreateSalesChannel {
    onCreateSalesChannel {
      account {
        activeAccount
        actualOrders
        configuration {
          key
        }
        createdAt
        id
        isVtexAccount
        maxiumMonthlyOrders
        name
        salesChannels {
          items {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      accountSalesChannelsId
      createdAt
      id
      name
      salesSource {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const onCreateSalesSource = /* GraphQL */ `
  subscription OnCreateSalesSource {
    onCreateSalesSource {
      configuration {
        key
      }
      createdAt
      downloadOrders
      id
      salesChannel {
        account {
          activeAccount
          actualOrders
          configuration {
            key
          }
          createdAt
          id
          isVtexAccount
          maxiumMonthlyOrders
          name
          salesChannels {
            items {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        accountSalesChannelsId
        createdAt
        id
        name
        salesSource {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        type
        updatedAt
      }
      salesChannelSalesSourceId
      salesSourceStoreConfigId
      storeConfig {
        batchInterval
        capacityManagement
        createdAt
        general {
          address
          addressComplement
          changePricesReasons {
            id
            name
          }
          city
          contactInformation {
            email
            name
            phone
          }
          country
          deliveryWindow {
            finalHour
            initialHour
            name
            weekDay
          }
          location {
            latitude
            longitude
          }
          measurementUnit
          name
          replacementReasons {
            id
            name
          }
          state
        }
        globalOrders
        id
        isActive
        localOrders
        packages {
          description
          id
          name
          price
          quantity
          type
        }
        packingPath
        preparationTime
        salesSources {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        timezone {
          offset
          value
        }
        updatedAt
      }
      storeConfigSalesSourcesId
      type
      updatedAt
      warehouseId
      warehouseName
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService {
    onCreateService {
      agent {
        email
        id
        identification
        name
        phone
        vehicle
      }
      carrierId
      carrierLogo
      carrierName
      carrierServiceType
      comments
      createdAt
      evidences {
        author
        content
        date
        type
      }
      id
      labels {
        id
        name
        type
        url
      }
      metaData
      notes {
        author
        content
        date
        type
      }
      orderId
      packages {
        description
        dimensions {
          height
          length
          width
        }
        envelope
        id
        items {
          ean
          id
          image
          name
          price
          quantity
          refId
          type
          weight
        }
        orderId
        totalValue
        weight
      }
      paymentMethod
      rating
      receiver {
        address
        addressComplement
        city
        contactName
        country
        deliveryDate
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        identification
        location {
          latitude
          longitude
        }
        name
        phone
        state
        zipCode
      }
      seller
      sender {
        address
        addressComplement
        city
        country
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        location {
          latitude
          longitude
        }
        name
        phone
        pickupDate
        state
        zipCode
      }
      serviceId
      shippingEstimatedDate
      shippingPrice
      status
      timeline {
        items {
          author
          createdAt
          date
          description
          id
          metaData
          serviceID
          type
          updatedAt
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      totalDistanceTraveled
      trackingUrl
      type
      updatedAt
    }
  }
`;
export const onCreateStoreConfig = /* GraphQL */ `
  subscription OnCreateStoreConfig {
    onCreateStoreConfig {
      batchInterval
      capacityManagement
      createdAt
      general {
        address
        addressComplement
        changePricesReasons {
          id
          name
        }
        city
        contactInformation {
          email
          name
          phone
        }
        country
        deliveryWindow {
          finalHour
          initialHour
          name
          weekDay
        }
        location {
          latitude
          longitude
        }
        measurementUnit
        name
        replacementReasons {
          id
          name
        }
        state
      }
      globalOrders
      id
      isActive
      localOrders
      packages {
        description
        id
        name
        price
        quantity
        type
      }
      packingPath
      preparationTime
      salesSources {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      updatedAt
    }
  }
`;
export const onCreateTrackingTimeline = /* GraphQL */ `
  subscription OnCreateTrackingTimeline {
    onCreateTrackingTimeline {
      author
      createdAt
      date
      description
      id
      metaData
      serviceID
      type
      updatedAt
    }
  }
`;
export const onCreateWorksheet = /* GraphQL */ `
  subscription OnCreateWorksheet {
    onCreateWorksheet {
      batchWorksheetsId
      categoriesIds
      createdAt
      finishedDate
      id
      items {
        ID
        categoriesId
        finalPrice
        itemAssignment {
          AssignedAt
          FinishedAt
          StartPickingAt
        }
        name
        orderSource {
          orderId
          quantity
        }
        originalPrice
        status
        temperature
        totalQuantity
      }
      ordersIds
      pickerAssignment {
        assignmentDate
        method
        pickerId
      }
      status
      totalItems
      updatedAt
    }
  }
`;
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount {
    onDeleteAccount {
      activeAccount
      actualOrders
      configuration {
        key
      }
      createdAt
      id
      isVtexAccount
      maxiumMonthlyOrders
      name
      salesChannels {
        items {
          account {
            activeAccount
            actualOrders
            configuration {
              key
            }
            createdAt
            id
            isVtexAccount
            maxiumMonthlyOrders
            name
            salesChannels {
              items {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          accountSalesChannelsId
          createdAt
          id
          name
          salesSource {
            items {
              configuration {
                key
              }
              createdAt
              downloadOrders
              id
              salesChannel {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              salesChannelSalesSourceId
              salesSourceStoreConfigId
              storeConfig {
                batchInterval
                capacityManagement
                createdAt
                general {
                  address
                  addressComplement
                  changePricesReasons {
                    id
                    name
                  }
                  city
                  contactInformation {
                    email
                    name
                    phone
                  }
                  country
                  deliveryWindow {
                    finalHour
                    initialHour
                    name
                    weekDay
                  }
                  location {
                    latitude
                    longitude
                  }
                  measurementUnit
                  name
                  replacementReasons {
                    id
                    name
                  }
                  state
                }
                globalOrders
                id
                isActive
                localOrders
                packages {
                  description
                  id
                  name
                  price
                  quantity
                  type
                }
                packingPath
                preparationTime
                salesSources {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                timezone {
                  offset
                  value
                }
                updatedAt
              }
              storeConfigSalesSourcesId
              type
              updatedAt
              warehouseId
              warehouseName
            }
            nextToken
          }
          type
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteBatch = /* GraphQL */ `
  subscription OnDeleteBatch {
    onDeleteBatch {
      assignmentMethod
      assignmentTime {
        assignedAt
      }
      createdAt
      deliveryWindow {
        finalHour
        initialHour
      }
      id
      orders {
        items {
          batchOrdersId
          billing {
            address1
            address2
            billingName
            city
            country
            discount
            docType
            freighAmount
            id
            state
            tax
            total
          }
          createdAt
          createdDate
          customer {
            document
            documentType
            email
            firstName
            lastName
            level
            phone
            profileId
          }
          deliveryChannel
          deliveryDate
          finishedDate
          hostname
          invoices {
            invoiceCreationDate
            invoiceKey
            invoiceNumber
            invoiceReceiptDate
            invoiceSubtotal
            invoiceTaxes
            invoiceTotal
            invoiceUrl
            packages
          }
          items {
            EAN
            additionalEAN
            additionalReferenceCode
            additionalSku
            basePrice
            brand {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            categories {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            description
            dimensions {
              cubicWeight
              height
              lenght
              weight
              width
            }
            id
            images
            inventoryData {
              quantity
              warehouseId
              warehouseName
            }
            isCombo
            isTaxable
            itemName
            label
            metaData
            notes
            observations
            pickingOptions {
              alternateOptions
              onNotFound
            }
            price
            qrCodeContent
            quantity
            referenceCode
            sku
            storeConfig
            tax
            temperature
            unitMultiplier
            unitOfMeasure
            weightableProduct
          }
          marketingData {
            id
            marketingTags
            utmCampaign
            utmMedium
            utmPartner
            utmSource
            utmiPart
            utmipage
          }
          metaData
          notes
          observations
          orderAssignment {
            finishedDate
            initDate
            status
            worksheetId
          }
          orderId
          payment {
            authorization
            baseTotal
            cardNumber
            currency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            date
            discount
            firstDigits
            grandTotal
            installments
            lastDigits
            method
            paymentHolder
            paymentId
            paymentName
            plcConversionRate
            priceListCurrency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            tax
            transactionId
            transactionRef
          }
          prepareDate
          salesSourceId
          shipping {
            orderUniqueAddress
            shippingInfo {
              address1
              address2
              carrier {
                id
                name
                phone
                type
              }
              city
              contactName
              contactPhone
              country
              indications
              itemId
              location {
                alt
                lat
                lng
              }
              schedule {
                fromDate
                toDate
              }
              shippingMethod {
                id
                name
                saleChannelShippingInfo
                subTotal
                taxes
                total
              }
              shippingType
              state
            }
            tracking {
              carrier
              createDate
              delivered
              deliveredDate
              id
              packages
              trackingKey
              trackingUrl
            }
          }
          shippingEstimatedDateMin
          status
          storeConfigId
          transactionDate
          updatedAt
          vendor {
            name
            vendorId
          }
        }
        nextToken
      }
      seller
      status
      updatedAt
      worksheets {
        items {
          batchWorksheetsId
          categoriesIds
          createdAt
          finishedDate
          id
          items {
            ID
            categoriesId
            finalPrice
            itemAssignment {
              AssignedAt
              FinishedAt
              StartPickingAt
            }
            name
            orderSource {
              orderId
              quantity
            }
            originalPrice
            status
            temperature
            totalQuantity
          }
          ordersIds
          pickerAssignment {
            assignmentDate
            method
            pickerId
          }
          status
          totalItems
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteCarrier = /* GraphQL */ `
  subscription OnDeleteCarrier {
    onDeleteCarrier {
      active
      agencyId
      allocationTime
      authorized
      cancelable
      countries
      createdAt
      formConfiguration {
        description
        key
        label
        max
        min
        options {
          id
          label
          value
        }
        priority
        required
        type
        value
      }
      hasDevEnvironment
      id
      integration {
        dev {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
        prod {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
      }
      logo
      name
      onHoldServices
      pricing {
        type
        value
      }
      shippingPaymentMethods
      type
      updatedAt
      withQueues
    }
  }
`;
export const onDeleteCarriersStoreConfig = /* GraphQL */ `
  subscription OnDeleteCarriersStoreConfig {
    onDeleteCarriersStoreConfig {
      account
      active
      carrierId
      config {
        key
        label
        value
      }
      createdAt
      deliveryMethod {
        id
        name
        serviceType
      }
      env
      id
      name
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      batchOrdersId
      billing {
        address1
        address2
        billingName
        city
        country
        discount
        docType
        freighAmount
        id
        state
        tax
        total
      }
      createdAt
      createdDate
      customer {
        document
        documentType
        email
        firstName
        lastName
        level
        phone
        profileId
      }
      deliveryChannel
      deliveryDate
      finishedDate
      hostname
      invoices {
        invoiceCreationDate
        invoiceKey
        invoiceNumber
        invoiceReceiptDate
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        packages
      }
      items {
        EAN
        additionalEAN
        additionalReferenceCode
        additionalSku
        basePrice
        brand {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        categories {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        description
        dimensions {
          cubicWeight
          height
          lenght
          weight
          width
        }
        id
        images
        inventoryData {
          quantity
          warehouseId
          warehouseName
        }
        isCombo
        isTaxable
        itemName
        label
        metaData
        notes
        observations
        pickingOptions {
          alternateOptions
          onNotFound
        }
        price
        qrCodeContent
        quantity
        referenceCode
        sku
        storeConfig
        tax
        temperature
        unitMultiplier
        unitOfMeasure
        weightableProduct
      }
      marketingData {
        id
        marketingTags
        utmCampaign
        utmMedium
        utmPartner
        utmSource
        utmiPart
        utmipage
      }
      metaData
      notes
      observations
      orderAssignment {
        finishedDate
        initDate
        status
        worksheetId
      }
      orderId
      payment {
        authorization
        baseTotal
        cardNumber
        currency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        date
        discount
        firstDigits
        grandTotal
        installments
        lastDigits
        method
        paymentHolder
        paymentId
        paymentName
        plcConversionRate
        priceListCurrency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        tax
        transactionId
        transactionRef
      }
      prepareDate
      salesSourceId
      shipping {
        orderUniqueAddress
        shippingInfo {
          address1
          address2
          carrier {
            id
            name
            phone
            type
          }
          city
          contactName
          contactPhone
          country
          indications
          itemId
          location {
            alt
            lat
            lng
          }
          schedule {
            fromDate
            toDate
          }
          shippingMethod {
            id
            name
            saleChannelShippingInfo
            subTotal
            taxes
            total
          }
          shippingType
          state
        }
        tracking {
          carrier
          createDate
          delivered
          deliveredDate
          id
          packages
          trackingKey
          trackingUrl
        }
      }
      shippingEstimatedDateMin
      status
      storeConfigId
      transactionDate
      updatedAt
      vendor {
        name
        vendorId
      }
    }
  }
`;
export const onDeleteSalesChannel = /* GraphQL */ `
  subscription OnDeleteSalesChannel {
    onDeleteSalesChannel {
      account {
        activeAccount
        actualOrders
        configuration {
          key
        }
        createdAt
        id
        isVtexAccount
        maxiumMonthlyOrders
        name
        salesChannels {
          items {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      accountSalesChannelsId
      createdAt
      id
      name
      salesSource {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const onDeleteSalesSource = /* GraphQL */ `
  subscription OnDeleteSalesSource {
    onDeleteSalesSource {
      configuration {
        key
      }
      createdAt
      downloadOrders
      id
      salesChannel {
        account {
          activeAccount
          actualOrders
          configuration {
            key
          }
          createdAt
          id
          isVtexAccount
          maxiumMonthlyOrders
          name
          salesChannels {
            items {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        accountSalesChannelsId
        createdAt
        id
        name
        salesSource {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        type
        updatedAt
      }
      salesChannelSalesSourceId
      salesSourceStoreConfigId
      storeConfig {
        batchInterval
        capacityManagement
        createdAt
        general {
          address
          addressComplement
          changePricesReasons {
            id
            name
          }
          city
          contactInformation {
            email
            name
            phone
          }
          country
          deliveryWindow {
            finalHour
            initialHour
            name
            weekDay
          }
          location {
            latitude
            longitude
          }
          measurementUnit
          name
          replacementReasons {
            id
            name
          }
          state
        }
        globalOrders
        id
        isActive
        localOrders
        packages {
          description
          id
          name
          price
          quantity
          type
        }
        packingPath
        preparationTime
        salesSources {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        timezone {
          offset
          value
        }
        updatedAt
      }
      storeConfigSalesSourcesId
      type
      updatedAt
      warehouseId
      warehouseName
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService {
    onDeleteService {
      agent {
        email
        id
        identification
        name
        phone
        vehicle
      }
      carrierId
      carrierLogo
      carrierName
      carrierServiceType
      comments
      createdAt
      evidences {
        author
        content
        date
        type
      }
      id
      labels {
        id
        name
        type
        url
      }
      metaData
      notes {
        author
        content
        date
        type
      }
      orderId
      packages {
        description
        dimensions {
          height
          length
          width
        }
        envelope
        id
        items {
          ean
          id
          image
          name
          price
          quantity
          refId
          type
          weight
        }
        orderId
        totalValue
        weight
      }
      paymentMethod
      rating
      receiver {
        address
        addressComplement
        city
        contactName
        country
        deliveryDate
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        identification
        location {
          latitude
          longitude
        }
        name
        phone
        state
        zipCode
      }
      seller
      sender {
        address
        addressComplement
        city
        country
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        location {
          latitude
          longitude
        }
        name
        phone
        pickupDate
        state
        zipCode
      }
      serviceId
      shippingEstimatedDate
      shippingPrice
      status
      timeline {
        items {
          author
          createdAt
          date
          description
          id
          metaData
          serviceID
          type
          updatedAt
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      totalDistanceTraveled
      trackingUrl
      type
      updatedAt
    }
  }
`;
export const onDeleteStoreConfig = /* GraphQL */ `
  subscription OnDeleteStoreConfig {
    onDeleteStoreConfig {
      batchInterval
      capacityManagement
      createdAt
      general {
        address
        addressComplement
        changePricesReasons {
          id
          name
        }
        city
        contactInformation {
          email
          name
          phone
        }
        country
        deliveryWindow {
          finalHour
          initialHour
          name
          weekDay
        }
        location {
          latitude
          longitude
        }
        measurementUnit
        name
        replacementReasons {
          id
          name
        }
        state
      }
      globalOrders
      id
      isActive
      localOrders
      packages {
        description
        id
        name
        price
        quantity
        type
      }
      packingPath
      preparationTime
      salesSources {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      updatedAt
    }
  }
`;
export const onDeleteTrackingTimeline = /* GraphQL */ `
  subscription OnDeleteTrackingTimeline {
    onDeleteTrackingTimeline {
      author
      createdAt
      date
      description
      id
      metaData
      serviceID
      type
      updatedAt
    }
  }
`;
export const onDeleteWorksheet = /* GraphQL */ `
  subscription OnDeleteWorksheet {
    onDeleteWorksheet {
      batchWorksheetsId
      categoriesIds
      createdAt
      finishedDate
      id
      items {
        ID
        categoriesId
        finalPrice
        itemAssignment {
          AssignedAt
          FinishedAt
          StartPickingAt
        }
        name
        orderSource {
          orderId
          quantity
        }
        originalPrice
        status
        temperature
        totalQuantity
      }
      ordersIds
      pickerAssignment {
        assignmentDate
        method
        pickerId
      }
      status
      totalItems
      updatedAt
    }
  }
`;
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount {
    onUpdateAccount {
      activeAccount
      actualOrders
      configuration {
        key
      }
      createdAt
      id
      isVtexAccount
      maxiumMonthlyOrders
      name
      salesChannels {
        items {
          account {
            activeAccount
            actualOrders
            configuration {
              key
            }
            createdAt
            id
            isVtexAccount
            maxiumMonthlyOrders
            name
            salesChannels {
              items {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              nextToken
            }
            updatedAt
          }
          accountSalesChannelsId
          createdAt
          id
          name
          salesSource {
            items {
              configuration {
                key
              }
              createdAt
              downloadOrders
              id
              salesChannel {
                account {
                  activeAccount
                  actualOrders
                  configuration {
                    key
                  }
                  createdAt
                  id
                  isVtexAccount
                  maxiumMonthlyOrders
                  name
                  salesChannels {
                    nextToken
                  }
                  updatedAt
                }
                accountSalesChannelsId
                createdAt
                id
                name
                salesSource {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                type
                updatedAt
              }
              salesChannelSalesSourceId
              salesSourceStoreConfigId
              storeConfig {
                batchInterval
                capacityManagement
                createdAt
                general {
                  address
                  addressComplement
                  changePricesReasons {
                    id
                    name
                  }
                  city
                  contactInformation {
                    email
                    name
                    phone
                  }
                  country
                  deliveryWindow {
                    finalHour
                    initialHour
                    name
                    weekDay
                  }
                  location {
                    latitude
                    longitude
                  }
                  measurementUnit
                  name
                  replacementReasons {
                    id
                    name
                  }
                  state
                }
                globalOrders
                id
                isActive
                localOrders
                packages {
                  description
                  id
                  name
                  price
                  quantity
                  type
                }
                packingPath
                preparationTime
                salesSources {
                  items {
                    createdAt
                    downloadOrders
                    id
                    salesChannelSalesSourceId
                    salesSourceStoreConfigId
                    storeConfigSalesSourcesId
                    type
                    updatedAt
                    warehouseId
                    warehouseName
                  }
                  nextToken
                }
                timezone {
                  offset
                  value
                }
                updatedAt
              }
              storeConfigSalesSourcesId
              type
              updatedAt
              warehouseId
              warehouseName
            }
            nextToken
          }
          type
          updatedAt
        }
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateBatch = /* GraphQL */ `
  subscription OnUpdateBatch {
    onUpdateBatch {
      assignmentMethod
      assignmentTime {
        assignedAt
      }
      createdAt
      deliveryWindow {
        finalHour
        initialHour
      }
      id
      orders {
        items {
          batchOrdersId
          billing {
            address1
            address2
            billingName
            city
            country
            discount
            docType
            freighAmount
            id
            state
            tax
            total
          }
          createdAt
          createdDate
          customer {
            document
            documentType
            email
            firstName
            lastName
            level
            phone
            profileId
          }
          deliveryChannel
          deliveryDate
          finishedDate
          hostname
          invoices {
            invoiceCreationDate
            invoiceKey
            invoiceNumber
            invoiceReceiptDate
            invoiceSubtotal
            invoiceTaxes
            invoiceTotal
            invoiceUrl
            packages
          }
          items {
            EAN
            additionalEAN
            additionalReferenceCode
            additionalSku
            basePrice
            brand {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            categories {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            description
            dimensions {
              cubicWeight
              height
              lenght
              weight
              width
            }
            id
            images
            inventoryData {
              quantity
              warehouseId
              warehouseName
            }
            isCombo
            isTaxable
            itemName
            label
            metaData
            notes
            observations
            pickingOptions {
              alternateOptions
              onNotFound
            }
            price
            qrCodeContent
            quantity
            referenceCode
            sku
            storeConfig
            tax
            temperature
            unitMultiplier
            unitOfMeasure
            weightableProduct
          }
          marketingData {
            id
            marketingTags
            utmCampaign
            utmMedium
            utmPartner
            utmSource
            utmiPart
            utmipage
          }
          metaData
          notes
          observations
          orderAssignment {
            finishedDate
            initDate
            status
            worksheetId
          }
          orderId
          payment {
            authorization
            baseTotal
            cardNumber
            currency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            date
            discount
            firstDigits
            grandTotal
            installments
            lastDigits
            method
            paymentHolder
            paymentId
            paymentName
            plcConversionRate
            priceListCurrency {
              code
              decimalSeparator
              deicmalDigits
              groupSeparator
              groupSize
              name
              symbol
            }
            tax
            transactionId
            transactionRef
          }
          prepareDate
          salesSourceId
          shipping {
            orderUniqueAddress
            shippingInfo {
              address1
              address2
              carrier {
                id
                name
                phone
                type
              }
              city
              contactName
              contactPhone
              country
              indications
              itemId
              location {
                alt
                lat
                lng
              }
              schedule {
                fromDate
                toDate
              }
              shippingMethod {
                id
                name
                saleChannelShippingInfo
                subTotal
                taxes
                total
              }
              shippingType
              state
            }
            tracking {
              carrier
              createDate
              delivered
              deliveredDate
              id
              packages
              trackingKey
              trackingUrl
            }
          }
          shippingEstimatedDateMin
          status
          storeConfigId
          transactionDate
          updatedAt
          vendor {
            name
            vendorId
          }
        }
        nextToken
      }
      seller
      status
      updatedAt
      worksheets {
        items {
          batchWorksheetsId
          categoriesIds
          createdAt
          finishedDate
          id
          items {
            ID
            categoriesId
            finalPrice
            itemAssignment {
              AssignedAt
              FinishedAt
              StartPickingAt
            }
            name
            orderSource {
              orderId
              quantity
            }
            originalPrice
            status
            temperature
            totalQuantity
          }
          ordersIds
          pickerAssignment {
            assignmentDate
            method
            pickerId
          }
          status
          totalItems
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateCarrier = /* GraphQL */ `
  subscription OnUpdateCarrier {
    onUpdateCarrier {
      active
      agencyId
      allocationTime
      authorized
      cancelable
      countries
      createdAt
      formConfiguration {
        description
        key
        label
        max
        min
        options {
          id
          label
          value
        }
        priority
        required
        type
        value
      }
      hasDevEnvironment
      id
      integration {
        dev {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
        prod {
          cancelEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          endpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          pauseEndpoint {
            method
            protocol
            url
            variables {
              key
              type
              value
            }
          }
          webhookEndpoint
        }
      }
      logo
      name
      onHoldServices
      pricing {
        type
        value
      }
      shippingPaymentMethods
      type
      updatedAt
      withQueues
    }
  }
`;
export const onUpdateCarriersStoreConfig = /* GraphQL */ `
  subscription OnUpdateCarriersStoreConfig {
    onUpdateCarriersStoreConfig {
      account
      active
      carrierId
      config {
        key
        label
        value
      }
      createdAt
      deliveryMethod {
        id
        name
        serviceType
      }
      env
      id
      name
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      batchOrdersId
      billing {
        address1
        address2
        billingName
        city
        country
        discount
        docType
        freighAmount
        id
        state
        tax
        total
      }
      createdAt
      createdDate
      customer {
        document
        documentType
        email
        firstName
        lastName
        level
        phone
        profileId
      }
      deliveryChannel
      deliveryDate
      finishedDate
      hostname
      invoices {
        invoiceCreationDate
        invoiceKey
        invoiceNumber
        invoiceReceiptDate
        invoiceSubtotal
        invoiceTaxes
        invoiceTotal
        invoiceUrl
        packages
      }
      items {
        EAN
        additionalEAN
        additionalReferenceCode
        additionalSku
        basePrice
        brand {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        categories {
          children {
            children {
              children {
                children {
                  children {
                    id
                    name
                  }
                  id
                  name
                }
                id
                name
              }
              id
              name
            }
            id
            name
          }
          id
          name
        }
        description
        dimensions {
          cubicWeight
          height
          lenght
          weight
          width
        }
        id
        images
        inventoryData {
          quantity
          warehouseId
          warehouseName
        }
        isCombo
        isTaxable
        itemName
        label
        metaData
        notes
        observations
        pickingOptions {
          alternateOptions
          onNotFound
        }
        price
        qrCodeContent
        quantity
        referenceCode
        sku
        storeConfig
        tax
        temperature
        unitMultiplier
        unitOfMeasure
        weightableProduct
      }
      marketingData {
        id
        marketingTags
        utmCampaign
        utmMedium
        utmPartner
        utmSource
        utmiPart
        utmipage
      }
      metaData
      notes
      observations
      orderAssignment {
        finishedDate
        initDate
        status
        worksheetId
      }
      orderId
      payment {
        authorization
        baseTotal
        cardNumber
        currency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        date
        discount
        firstDigits
        grandTotal
        installments
        lastDigits
        method
        paymentHolder
        paymentId
        paymentName
        plcConversionRate
        priceListCurrency {
          code
          decimalSeparator
          deicmalDigits
          groupSeparator
          groupSize
          name
          symbol
        }
        tax
        transactionId
        transactionRef
      }
      prepareDate
      salesSourceId
      shipping {
        orderUniqueAddress
        shippingInfo {
          address1
          address2
          carrier {
            id
            name
            phone
            type
          }
          city
          contactName
          contactPhone
          country
          indications
          itemId
          location {
            alt
            lat
            lng
          }
          schedule {
            fromDate
            toDate
          }
          shippingMethod {
            id
            name
            saleChannelShippingInfo
            subTotal
            taxes
            total
          }
          shippingType
          state
        }
        tracking {
          carrier
          createDate
          delivered
          deliveredDate
          id
          packages
          trackingKey
          trackingUrl
        }
      }
      shippingEstimatedDateMin
      status
      storeConfigId
      transactionDate
      updatedAt
      vendor {
        name
        vendorId
      }
    }
  }
`;
export const onUpdateSalesChannel = /* GraphQL */ `
  subscription OnUpdateSalesChannel {
    onUpdateSalesChannel {
      account {
        activeAccount
        actualOrders
        configuration {
          key
        }
        createdAt
        id
        isVtexAccount
        maxiumMonthlyOrders
        name
        salesChannels {
          items {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          nextToken
        }
        updatedAt
      }
      accountSalesChannelsId
      createdAt
      id
      name
      salesSource {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      type
      updatedAt
    }
  }
`;
export const onUpdateSalesSource = /* GraphQL */ `
  subscription OnUpdateSalesSource {
    onUpdateSalesSource {
      configuration {
        key
      }
      createdAt
      downloadOrders
      id
      salesChannel {
        account {
          activeAccount
          actualOrders
          configuration {
            key
          }
          createdAt
          id
          isVtexAccount
          maxiumMonthlyOrders
          name
          salesChannels {
            items {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            nextToken
          }
          updatedAt
        }
        accountSalesChannelsId
        createdAt
        id
        name
        salesSource {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        type
        updatedAt
      }
      salesChannelSalesSourceId
      salesSourceStoreConfigId
      storeConfig {
        batchInterval
        capacityManagement
        createdAt
        general {
          address
          addressComplement
          changePricesReasons {
            id
            name
          }
          city
          contactInformation {
            email
            name
            phone
          }
          country
          deliveryWindow {
            finalHour
            initialHour
            name
            weekDay
          }
          location {
            latitude
            longitude
          }
          measurementUnit
          name
          replacementReasons {
            id
            name
          }
          state
        }
        globalOrders
        id
        isActive
        localOrders
        packages {
          description
          id
          name
          price
          quantity
          type
        }
        packingPath
        preparationTime
        salesSources {
          items {
            configuration {
              key
            }
            createdAt
            downloadOrders
            id
            salesChannel {
              account {
                activeAccount
                actualOrders
                configuration {
                  key
                }
                createdAt
                id
                isVtexAccount
                maxiumMonthlyOrders
                name
                salesChannels {
                  items {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  nextToken
                }
                updatedAt
              }
              accountSalesChannelsId
              createdAt
              id
              name
              salesSource {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              type
              updatedAt
            }
            salesChannelSalesSourceId
            salesSourceStoreConfigId
            storeConfig {
              batchInterval
              capacityManagement
              createdAt
              general {
                address
                addressComplement
                changePricesReasons {
                  id
                  name
                }
                city
                contactInformation {
                  email
                  name
                  phone
                }
                country
                deliveryWindow {
                  finalHour
                  initialHour
                  name
                  weekDay
                }
                location {
                  latitude
                  longitude
                }
                measurementUnit
                name
                replacementReasons {
                  id
                  name
                }
                state
              }
              globalOrders
              id
              isActive
              localOrders
              packages {
                description
                id
                name
                price
                quantity
                type
              }
              packingPath
              preparationTime
              salesSources {
                items {
                  configuration {
                    key
                  }
                  createdAt
                  downloadOrders
                  id
                  salesChannel {
                    accountSalesChannelsId
                    createdAt
                    id
                    name
                    type
                    updatedAt
                  }
                  salesChannelSalesSourceId
                  salesSourceStoreConfigId
                  storeConfig {
                    batchInterval
                    capacityManagement
                    createdAt
                    globalOrders
                    id
                    isActive
                    localOrders
                    packingPath
                    preparationTime
                    updatedAt
                  }
                  storeConfigSalesSourcesId
                  type
                  updatedAt
                  warehouseId
                  warehouseName
                }
                nextToken
              }
              timezone {
                offset
                value
              }
              updatedAt
            }
            storeConfigSalesSourcesId
            type
            updatedAt
            warehouseId
            warehouseName
          }
          nextToken
        }
        timezone {
          offset
          value
        }
        updatedAt
      }
      storeConfigSalesSourcesId
      type
      updatedAt
      warehouseId
      warehouseName
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService {
    onUpdateService {
      agent {
        email
        id
        identification
        name
        phone
        vehicle
      }
      carrierId
      carrierLogo
      carrierName
      carrierServiceType
      comments
      createdAt
      evidences {
        author
        content
        date
        type
      }
      id
      labels {
        id
        name
        type
        url
      }
      metaData
      notes {
        author
        content
        date
        type
      }
      orderId
      packages {
        description
        dimensions {
          height
          length
          width
        }
        envelope
        id
        items {
          ean
          id
          image
          name
          price
          quantity
          refId
          type
          weight
        }
        orderId
        totalValue
        weight
      }
      paymentMethod
      rating
      receiver {
        address
        addressComplement
        city
        contactName
        country
        deliveryDate
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        identification
        location {
          latitude
          longitude
        }
        name
        phone
        state
        zipCode
      }
      seller
      sender {
        address
        addressComplement
        city
        country
        deliveryWindow {
          finalDate
          initialDate
          name
        }
        email
        location {
          latitude
          longitude
        }
        name
        phone
        pickupDate
        state
        zipCode
      }
      serviceId
      shippingEstimatedDate
      shippingPrice
      status
      timeline {
        items {
          author
          createdAt
          date
          description
          id
          metaData
          serviceID
          type
          updatedAt
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      totalDistanceTraveled
      trackingUrl
      type
      updatedAt
    }
  }
`;
export const onUpdateStoreConfig = /* GraphQL */ `
  subscription OnUpdateStoreConfig {
    onUpdateStoreConfig {
      batchInterval
      capacityManagement
      createdAt
      general {
        address
        addressComplement
        changePricesReasons {
          id
          name
        }
        city
        contactInformation {
          email
          name
          phone
        }
        country
        deliveryWindow {
          finalHour
          initialHour
          name
          weekDay
        }
        location {
          latitude
          longitude
        }
        measurementUnit
        name
        replacementReasons {
          id
          name
        }
        state
      }
      globalOrders
      id
      isActive
      localOrders
      packages {
        description
        id
        name
        price
        quantity
        type
      }
      packingPath
      preparationTime
      salesSources {
        items {
          configuration {
            key
          }
          createdAt
          downloadOrders
          id
          salesChannel {
            account {
              activeAccount
              actualOrders
              configuration {
                key
              }
              createdAt
              id
              isVtexAccount
              maxiumMonthlyOrders
              name
              salesChannels {
                items {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                nextToken
              }
              updatedAt
            }
            accountSalesChannelsId
            createdAt
            id
            name
            salesSource {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            type
            updatedAt
          }
          salesChannelSalesSourceId
          salesSourceStoreConfigId
          storeConfig {
            batchInterval
            capacityManagement
            createdAt
            general {
              address
              addressComplement
              changePricesReasons {
                id
                name
              }
              city
              contactInformation {
                email
                name
                phone
              }
              country
              deliveryWindow {
                finalHour
                initialHour
                name
                weekDay
              }
              location {
                latitude
                longitude
              }
              measurementUnit
              name
              replacementReasons {
                id
                name
              }
              state
            }
            globalOrders
            id
            isActive
            localOrders
            packages {
              description
              id
              name
              price
              quantity
              type
            }
            packingPath
            preparationTime
            salesSources {
              items {
                configuration {
                  key
                }
                createdAt
                downloadOrders
                id
                salesChannel {
                  account {
                    activeAccount
                    actualOrders
                    createdAt
                    id
                    isVtexAccount
                    maxiumMonthlyOrders
                    name
                    updatedAt
                  }
                  accountSalesChannelsId
                  createdAt
                  id
                  name
                  salesSource {
                    nextToken
                  }
                  type
                  updatedAt
                }
                salesChannelSalesSourceId
                salesSourceStoreConfigId
                storeConfig {
                  batchInterval
                  capacityManagement
                  createdAt
                  general {
                    address
                    addressComplement
                    city
                    country
                    measurementUnit
                    name
                    state
                  }
                  globalOrders
                  id
                  isActive
                  localOrders
                  packages {
                    description
                    id
                    name
                    price
                    quantity
                    type
                  }
                  packingPath
                  preparationTime
                  salesSources {
                    nextToken
                  }
                  timezone {
                    offset
                    value
                  }
                  updatedAt
                }
                storeConfigSalesSourcesId
                type
                updatedAt
                warehouseId
                warehouseName
              }
              nextToken
            }
            timezone {
              offset
              value
            }
            updatedAt
          }
          storeConfigSalesSourcesId
          type
          updatedAt
          warehouseId
          warehouseName
        }
        nextToken
      }
      timezone {
        offset
        value
      }
      updatedAt
    }
  }
`;
export const onUpdateTrackingTimeline = /* GraphQL */ `
  subscription OnUpdateTrackingTimeline {
    onUpdateTrackingTimeline {
      author
      createdAt
      date
      description
      id
      metaData
      serviceID
      type
      updatedAt
    }
  }
`;
export const onUpdateWorksheet = /* GraphQL */ `
  subscription OnUpdateWorksheet {
    onUpdateWorksheet {
      batchWorksheetsId
      categoriesIds
      createdAt
      finishedDate
      id
      items {
        ID
        categoriesId
        finalPrice
        itemAssignment {
          AssignedAt
          FinishedAt
          StartPickingAt
        }
        name
        orderSource {
          orderId
          quantity
        }
        originalPrice
        status
        temperature
        totalQuantity
      }
      ordersIds
      pickerAssignment {
        assignmentDate
        method
        pickerId
      }
      status
      totalItems
      updatedAt
    }
  }
`;
