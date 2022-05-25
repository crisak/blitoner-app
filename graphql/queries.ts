/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
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
export const getBatch = /* GraphQL */ `
  query GetBatch($id: ID!) {
    getBatch(id: $id) {
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
export const getCarrier = /* GraphQL */ `
  query GetCarrier($id: ID!) {
    getCarrier(id: $id) {
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
export const getCarriersStoreConfig = /* GraphQL */ `
  query GetCarriersStoreConfig($id: ID!) {
    getCarriersStoreConfig(id: $id) {
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
export const getOrder = /* GraphQL */ `
  query GetOrder($orderId: String!) {
    getOrder(orderId: $orderId) {
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
export const getSalesChannel = /* GraphQL */ `
  query GetSalesChannel($id: ID!) {
    getSalesChannel(id: $id) {
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
export const getSalesSource = /* GraphQL */ `
  query GetSalesSource($id: ID!) {
    getSalesSource(id: $id) {
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
export const getService = /* GraphQL */ `
  query GetService($id: ID!) {
    getService(id: $id) {
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
export const getStoreConfig = /* GraphQL */ `
  query GetStoreConfig($id: ID!) {
    getStoreConfig(id: $id) {
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
export const getTrackingTimeline = /* GraphQL */ `
  query GetTrackingTimeline($id: ID!) {
    getTrackingTimeline(id: $id) {
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
export const getWorksheet = /* GraphQL */ `
  query GetWorksheet($id: ID!) {
    getWorksheet(id: $id) {
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
export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listAccounts(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listBatches = /* GraphQL */ `
  query ListBatches(
    $filter: ModelBatchFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBatches(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listCarriers = /* GraphQL */ `
  query ListCarriers(
    $filter: ModelCarrierFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCarriers(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listCarriersStoreConfigs = /* GraphQL */ `
  query ListCarriersStoreConfigs(
    $filter: ModelCarriersStoreConfigFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCarriersStoreConfigs(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $orderId: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      orderId: $orderId
      sortDirection: $sortDirection
    ) {
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
          categories {
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
  }
`;
export const listSalesChannels = /* GraphQL */ `
  query ListSalesChannels(
    $filter: ModelSalesChannelFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSalesChannels(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
      nextToken
    }
  }
`;
export const listSalesSources = /* GraphQL */ `
  query ListSalesSources(
    $filter: ModelSalesSourceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSalesSources(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listServices = /* GraphQL */ `
  query ListServices(
    $filter: ModelServiceFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listServices(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listStoreConfigs = /* GraphQL */ `
  query ListStoreConfigs(
    $filter: ModelStoreConfigFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStoreConfigs(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const listTrackingTimelines = /* GraphQL */ `
  query ListTrackingTimelines(
    $filter: ModelTrackingTimelineFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTrackingTimelines(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
  }
`;
export const listWorksheets = /* GraphQL */ `
  query ListWorksheets(
    $filter: ModelWorksheetFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWorksheets(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
`;
export const searchOrders = /* GraphQL */ `
  query SearchOrders($filters: OrderFilters, $pagination: OrderPagination) {
    searchOrders(filters: $filters, pagination: $pagination) {
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
export const searchOrdersStats = /* GraphQL */ `
  query SearchOrdersStats($filters: OrderFilters, $timeZone: String) {
    searchOrdersStats(filters: $filters, timeZone: $timeZone) {
      completedOrders
      date
      pendingOrders
      totalOrders
    }
  }
`;
